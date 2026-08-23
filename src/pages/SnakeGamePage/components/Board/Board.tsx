import { useEffect, useState, type FC } from "react";
import clsx from "clsx";

const GRID_WIDTH = 12;
const GRID_HEIGHT = 12;
type Cell = { x: number; y: number };

const INITIAL_SNAKE: Cell[] = [
  { x: 6, y: 6 },
  { x: 6, y: 7 },
  { x: 6, y: 8 },
];

const INITIAL_APPLE = { x: 6, y: 3 };

type Direction = "up" | "down" | "left" | "right";

const DELTA_DIRECTIONS: Record<Direction, Cell> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

const KEY_TO_DIRECTION: Record<string, Direction> = {
  w: "up",
  arrowup: "up",
  s: "down",
  arrowdown: "down",
  a: "left",
  arrowleft: "left",
  d: "right",
  arrowright: "right",
};

const isSameCell = (a: Cell, b: Cell) => a.x === b.x && a.y === b.y;

const Board: FC = () => {
  const [apple, setApple] = useState<Cell>(INITIAL_APPLE);
  const [snake, setSnake] = useState<Cell[]>(INITIAL_SNAKE);
  const [gameEnd, setGameEnd] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const createApple = (currentSnake: Cell[]) => {
    while (true) {
      const nextApple = {
        x: Math.floor(Math.random() * GRID_WIDTH),
        y: Math.floor(Math.random() * GRID_HEIGHT),
      };
      if (currentSnake.some((segment) => isSameCell(segment, nextApple)))
        continue;
      else {
        setApple(nextApple);
        break;
      }
    }
  };

  const move = (direction: Direction) => {
    if (gameEnd) return;

    const delta = DELTA_DIRECTIONS[direction];

    setSnake((prev) => {
      const head = prev[0];
      const neck = prev[1];
      const newHead = { x: head.x + delta.x, y: head.y + delta.y };

      if (isSameCell(neck, newHead)) return prev;
      if (isSameCell(apple, newHead)) {
        createApple(prev);
        return [newHead, ...prev];
      }

      return [newHead, ...prev.slice(0, -1)];
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = KEY_TO_DIRECTION[event.key.toLowerCase()];
      if (direction) move(direction);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [apple, gameEnd]);

  return (
    <div
      className="mx-auto grid w-fit"
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
    >
      {Array.from({ length: GRID_WIDTH }, (_, y) =>
        Array.from({ length: GRID_HEIGHT }, (_, x) => (
          <div
            key={`[${x}, ${y}]`}
            className={clsx(
              "h-10 w-10 border-r border-b",
              {
                "bg-gray-400": snake.some(
                  (segment) => segment.x === x && segment.y === y,
                ),
              },
              {
                "bg-rose-400": apple.x === x && apple.y === y,
              },
            )}
          >{x}, {y}</div>
        )),
      )}
    </div>
  );
};

export default Board;
