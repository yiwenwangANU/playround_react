import { useEffect, useEffectEvent, useReducer, type FC } from "react";
import clsx from "clsx";

const ROWS = 16;
const COLS = 10;
const INITIAL_BOARD: Board = {
  apple: { x: Math.floor(COLS / 3), y: Math.floor(ROWS / 3) },
  snake: [
    { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
    { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) + 1 },
  ],
  direction: "up",
  score: 0,
  end: false,
};
const DELTA_MOVE = {
  left: { dx: -1, dy: 0 },
  right: { dx: 1, dy: 0 },
  up: { dx: 0, dy: -1 },
  down: { dx: 0, dy: 1 },
};
const KEY_TO_MOVE: Record<string, Direction> = {
  w: "up",
  ArrowUp: "up",
  s: "down",
  ArrowDown: "down",
  a: "left",
  ArrowLeft: "left",
  d: "right",
  ArrowRight: "right",
};
const OPPOSITE_DIRECTION: Record<Direction, Direction> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};
const AUTO_MOVE_INTERVAL = 200;
type Cell = {
  x: number;
  y: number;
};

type Board = {
  apple: Cell;
  snake: Cell[];
  direction: Direction;
  score: number;
  end: boolean;
};

type Direction = "up" | "down" | "left" | "right";

type Action =
  { type: "move" } | { type: "changeDirection"; direction: Direction };

const reducer = (state: Board, action: Action) => {
  const head = state.snake[0];
  const newHead = {
    x: head.x + DELTA_MOVE[state.direction].dx,
    y: head.y + DELTA_MOVE[state.direction].dy,
  };
  switch (action.type) {
    case "changeDirection":
      return { ...state, direction: action.direction };
    case "move":
      if (state.end) return state;
      if (
        isOutSideBorder(newHead) ||
        isInCells(newHead, state.snake.slice(0, -1))
      )
        return { ...state, end: true };
      if (isTheSameCell(newHead, state.apple)) {
        const newSnake = [newHead, ...state.snake];
        const newApple = createNewApple(newSnake);
        return {
          ...state,
          apple: newApple,
          snake: newSnake,
          score: state.score + 1,
        };
      }
      return { ...state, snake: [newHead, ...state.snake.slice(0, -1)] };

    default:
      return state;
  }
};
const isTheSameCell = (a: Cell, b: Cell) => a.x === b.x && a.y === b.y;

const isInCells = (a: Cell, cells: Cell[]) => {
  for (const cell of cells) {
    if (isTheSameCell(a, cell)) {
      return true;
    }
  }
  return false;
};

const isOutSideBorder = (a: Cell) =>
  a.x < 0 || a.x >= COLS || a.y < 0 || a.y >= ROWS;

const createNewApple = (snake: Cell[]) => {
  while (true) {
    const newApple = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
    if (!isInCells(newApple, snake)) return newApple;
  }
};

const SnakeGamePage: FC = () => {
  const [board, dispatch] = useReducer(reducer, INITIAL_BOARD);

  const handleKeyDown = useEffectEvent((e: KeyboardEvent) => {
    if (!Object.keys(KEY_TO_MOVE).includes(e.key)) return;
    if (OPPOSITE_DIRECTION[KEY_TO_MOVE[e.key]] === board.direction) return;
    dispatch({ type: "changeDirection", direction: KEY_TO_MOVE[e.key] });
    dispatch({ type: "move" });
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "move" });
    }, AUTO_MOVE_INTERVAL);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="my-10 flex flex-col items-center gap-2">
      <span>Score {board.score}</span>
      <div
        className="grid w-fit border border-black"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {Array.from({ length: ROWS }, (_, y) =>
          Array.from({ length: COLS }, (_, x) => (
            <div
              className={clsx(
                "h-10 w-10",
                {
                  "bg-green-300": isTheSameCell(board.apple, { x, y }),
                },
                {
                  "bg-sky-500": isInCells({ x, y }, board.snake) && !board.end,
                },
                {
                  "bg-rose-400": isInCells({ x, y }, board.snake) && board.end,
                },
              )}
            ></div>
          )),
        )}
      </div>
      {board.end && <div className="text-rose-500">YOU DIE</div>}
    </div>
  );
};

export default SnakeGamePage;
