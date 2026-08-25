import { useEffect, useReducer, useRef, useState, type FC } from "react";
import clsx from "clsx";

const ROWS = 10;
const COLS = 10;
const INITIAL_STATE: State = {
  startPoint: null,
  currentPoint: null,
  isDragging: false,
};
type Point = {
  x: number;
  y: number;
};

type State = {
  startPoint: Point | null;
  currentPoint: Point | null;
  isDragging: boolean;
};

type Action =
  | {
      type: "pointerdown";
      point: Point;
    }
  | { type: "pointerup"; point: Point }
  | { type: "pointermove"; point: Point };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "pointerdown":
      return {
        ...state,
        startPoint: action.point,
        currentPoint: action.point,
        isDragging: true,
      };
    case "pointermove":
      if (!state.isDragging) return state;
      return { ...state, currentPoint: action.point };
    case "pointerup":
      return { ...state, currentPoint: action.point, isDragging: false };
    default:
      return state;
  }
};

const getSelectedCells = (
  start: Point,
  current: Point,
  cells: (HTMLDivElement | null)[],
) => {
  const left = Math.min(start.x, current.x);
  const right = Math.max(start.x, current.x);
  const top = Math.min(start.y, current.y);
  const bottom = Math.max(start.y, current.y);

  const selectedIndex = cells.reduce<number[]>((selected, cell, i) => {
    if (!cell) return selected;

    const rect = cell.getBoundingClientRect();
    if (
      rect.left <= right &&
      rect.right >= left &&
      rect.top <= bottom &&
      rect.bottom >= top
    )
      selected.push(i);
    return selected;
  }, []);

  return selectedIndex;
};
const SelectableCellsPage: FC = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [selected, setSelected] = useState<number[]>([]);
  const cellRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    if (!state.currentPoint || !state.startPoint || !state.isDragging) return;
    const nextSelect = getSelectedCells(
      state.startPoint,
      state.currentPoint,
      cellRefs.current,
    );
    setSelected(nextSelect);
  }, [state.startPoint, state.currentPoint, state.isDragging]);

  const handlePointerMove = (e: PointerEvent) =>
    dispatch({ type: "pointermove", point: { x: e.clientX, y: e.clientY } });

  const handlePointerUp = (e: PointerEvent) =>
    dispatch({ type: "pointerup", point: { x: e.clientX, y: e.clientY } });

  const boxStyle =
    state.startPoint && state.currentPoint && state.isDragging
      ? {
          left: Math.min(state.startPoint.x, state.currentPoint.x),
          top: Math.min(state.startPoint.y, state.currentPoint.y),
          width: Math.abs(state.startPoint.x - state.currentPoint.x),
          height: Math.abs(state.startPoint.y - state.currentPoint.y),
        }
      : undefined;

  return (
    <div
      className="flex h-dvh w-dvw items-center justify-center"
      onPointerDown={(e) => {
        setSelected([]);
        dispatch({
          type: "pointerdown",
          point: { x: e.clientX, y: e.clientY },
        });
      }}
    >
      {state.isDragging && boxStyle && (
        <div
          className="pointer-events-none fixed border border-dashed"
          style={boxStyle}
        />
      )}
      <div
        className="grid w-fit border-t border-r"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {Array.from({ length: ROWS * COLS }, (_, i) => (
          <div
            className={clsx("h-10 w-10 border-b border-l", {
              "bg-sky-300": selected.includes(i),
            })}
            key={i}
            ref={(cell) => {
              cellRefs.current[i] = cell;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectableCellsPage;
