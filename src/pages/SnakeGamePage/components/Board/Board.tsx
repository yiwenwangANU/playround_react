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
const isOutsideBorder = (cell: Cell) => {
  if (cell.x >= GRID_WIDTH || cell.x < 0 || cell.y >= GRID_HEIGHT || cell.y < 0)
    return true;
  return false;
};
const isInsideCurrentSnake = (cell: Cell, currentSnake: Cell[]) =>
  currentSnake.slice(0, -1).some((segment) => isSameCell(segment, cell));
const getNextAutoMove = (currentSnake: Cell[]) => {
  const head = currentSnake[0];
  const neck = currentSnake[1];
  if (head.x === neck.x && head.y <= neck.y) return "up";
  if (head.x === neck.x && head.y > neck.y) return "down";
  if (head.y === neck.y && head.x <= neck.x) return "left";
  return "right";
};

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
      if (isOutsideBorder(newHead) || isInsideCurrentSnake(newHead, prev)) {
        setGameEnd(true);
        return prev;
      }
      if (isSameCell(apple, newHead)) {
        createApple(prev);
        setScore((prev) => prev + 1);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextMove = getNextAutoMove(snake);
      move(nextMove);
    }, 500);

    return () => clearInterval(intervalId);
  }, [snake]);

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
                "bg-green-400":
                  snake.some((segment) => segment.x === x && segment.y === y) &&
                  !gameEnd,
              },
              {
                "bg-red-400":
                  snake.some((segment) => segment.x === x && segment.y === y) &&
                  gameEnd,
              },
              {
                "bg-gray-400": apple.x === x && apple.y === y,
              },
            )}
          ></div>
        )),
      )}
    </div>
  );
};

export default Board;
