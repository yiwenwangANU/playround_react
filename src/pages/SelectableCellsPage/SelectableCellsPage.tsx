import { useReducer, type FC } from "react";

const GRID_ROWS = 12;
const GRID_COLS = 12;

type Point = {
  x: number;
  y: number;
};

type Drag = {
  start: Point | null;
  current: Point | null;
  isDragging: boolean;
};

type Action =
  | { type: "pointerdown"; point: Point }
  | { type: "pointermove"; point: Point }
  | { type: "pointerup"; point: Point };

const reducer = (drag: Drag, action: Action) => {
  switch (action.type) {
    case "pointerdown":
      return { start: action.point, current: action.point, isDragging: true };
    case "pointermove":
      return { ...drag, current: action.point };
    case "pointerup":
      return { ...drag, current: action.point, isDragging: false };
    default:
      return drag;
  }
};

const SelectableCellsPage: FC = () => {
  const [drag, dispatch] = useReducer(reducer, {
    start: null,
    current: null,
    isDragging: false,
  });

  return (
    <div
      className="fixed inset-0"
      onPointerDown={(e) =>
        dispatch({ type: "pointerdown", point: { x: e.clientX, y: e.clientY } })
      }
      onPointerMove={(e) =>
        dispatch({ type: "pointermove", point: { x: e.clientX, y: e.clientY } })
      }
      onPointerUp={(e) =>
        dispatch({ type: "pointerup", point: { x: e.clientX, y: e.clientY } })
      }
    >
      {drag.current && drag.start && drag.isDragging && (
        <div
          className="absolute border border-dashed"
          style={{
            left: Math.min(drag.start.x, drag.current.x),
            top: Math.min(drag.start.y, drag.current.y),
            height: Math.abs(drag.start.y - drag.current.y),
            width: Math.abs(drag.start.x - drag.current.x),
          }}
        />
      )}
      <div className="grid h-full place-items-center">
        <div
          className="grid border-t border-l"
          style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)` }}
        >
          {Array.from({ length: GRID_COLS * GRID_ROWS }, () => (
            <div className="h-10 w-10 border-r border-b" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectableCellsPage;
