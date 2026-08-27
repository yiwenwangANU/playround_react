import { useEffect, useReducer, useRef, useState, type FC } from "react";
import clsx from "clsx";

const ROWS = 12;
const COLS = 12;

type Point = {
  x: number;
  y: number;
};

type Drag = {
  startPoint: Point | null;
  currentPoint: Point | null;
  isDragging: boolean;
};

type Action =
  | { type: "pointerdown"; point: Point }
  | { type: "pointermove"; point: Point }
  | { type: "pointerup" };

const reducer = (state: Drag, action: Action) => {
  switch (action.type) {
    case "pointerdown":
      return {
        startPoint: action.point,
        currentPoint: action.point,
        isDragging: true,
      };
    case "pointermove":
      if (state.isDragging) return { ...state, currentPoint: action.point };
      else return state;
    case "pointerup":
      return { ...state, isDragging: false };
    default:
      return state;
  }
};

const getSelectedCells = (
  startPoint: Point | null,
  currentPoint: Point | null,
  cells: (HTMLDivElement | null)[],
) => {
  if (!startPoint || !currentPoint) return [];
  const selectedIndex = cells.reduce<number[]>((selected, currentCell, i) => {
    if (!currentCell) return selected;
    const rect = currentCell.getBoundingClientRect();
    const left = Math.min(startPoint.x, currentPoint.x);
    const right = Math.max(startPoint.x, currentPoint.x);
    const top = Math.min(startPoint.y, currentPoint.y);
    const bottom = Math.max(startPoint.y, currentPoint.y);

    if (
      bottom >= rect.top &&
      top <= rect.bottom &&
      right >= rect.left &&
      left <= rect.right
    ) {
      return [...selected, i];
    }
    return selected;
  }, []);
  return selectedIndex;
};

const SelectableCellsPage: FC = () => {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const cellsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [drag, dispatch] = useReducer(reducer, {
    startPoint: null,
    currentPoint: null,
    isDragging: false,
  });

  useEffect(() => {
    setSelectedCells(() =>
      getSelectedCells(drag.startPoint, drag.currentPoint, cellsRef.current),
    );
  }, [drag.startPoint, drag.currentPoint, drag.isDragging]);

  return (
    <div
      className="fixed inset-0 grid h-dvh w-dvw place-items-center"
      onPointerDown={(e) =>
        dispatch({
          type: "pointerdown",
          point: { x: e.clientX, y: e.clientY },
        })
      }
      onPointerMove={(e) =>
        dispatch({
          type: "pointermove",
          point: { x: e.clientX, y: e.clientY },
        })
      }
      onMouseUp={() =>
        dispatch({
          type: "pointerup",
        })
      }
    >
      {drag.isDragging && drag.startPoint && drag.currentPoint && (
        <div
          className="fixed border border-dashed"
          style={{
            left: Math.min(drag.startPoint.x, drag.currentPoint.x),
            top: Math.min(drag.startPoint.y, drag.currentPoint.y),
            width: Math.abs(drag.startPoint.x - drag.currentPoint.x),
            height: Math.abs(drag.startPoint.y - drag.currentPoint.y),
          }}
        />
      )}
      <div
        className="grid w-fit border-t border-l"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {Array.from({ length: ROWS * COLS }, (_, i) => (
          <div
            className={clsx("h-10 w-10 border-r border-b", {
              "bg-sky-100": selectedCells.includes(i),
            })}
            ref={(cell) => {
              cellsRef.current[i] = cell;
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectableCellsPage;
