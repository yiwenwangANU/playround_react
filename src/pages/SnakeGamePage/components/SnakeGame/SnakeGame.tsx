import { useEffect, useEffectEvent, useReducer, type FC } from "react";
import clsx from "clsx";

const BOARD_WIDTH = 12;
const BOARD_HEIGHT = 12;
const AUTO_MOVE_INTERVAL = 200;
const INITIAL_GAME: Game = {
  snake: [
    { x: 6, y: 6 },
    { x: 6, y: 7 },
  ],
  apple: { x: 6, y: 3 },
  isEnd: false,
  score: 0,
};
const DIRECTION_TO_DELTA_MOVEMENTS: Record<Directions, Cell> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};
const KEY_TO_DIRECTION: Record<string, Directions> = {
  w: "up",
  arrowup: "up",
  s: "down",
  arrowdown: "down",
  d: "right",
  arrowright: "right",
  a: "left",
  arrowleft: "left",
};

type Directions = "up" | "down" | "left" | "right";

type Cell = {
  x: number;
  y: number;
};

type Game = {
  snake: Cell[];
  apple: Cell;
  isEnd: boolean;
  score: number;
};

type Action =
  | {
      type: "reset";
    }
  | { type: "move"; direction: Directions };

const isSameCell = (a: Cell, b: Cell) => a.x === b.x && a.y === b.y;

const isOutsideBoard = (cell: Cell) =>
  cell.x < 0 || cell.x >= BOARD_WIDTH || cell.y < 0 || cell.y >= BOARD_HEIGHT;

const isInsideSnake = (cell: Cell, snake: Cell[]) =>
  snake.some((segment) => isSameCell(cell, segment));

const createNewApple = (snake: Cell[]): Cell => {
  while (true) {
    const newApple = {
      x: Math.floor(Math.random() * BOARD_WIDTH),
      y: Math.floor(Math.random() * BOARD_HEIGHT),
    };
    if (snake.some((segment) => isSameCell(segment, newApple))) continue;
    return newApple;
  }
};

const getAutoMoveDirection = (snake: Cell[]): Directions => {
  const head = snake[0];
  const neck = snake[1];
  if (head.x === neck.x && head.y === neck.y - 1) return "up";
  if (head.x === neck.x && head.y === neck.y + 1) return "down";
  if (head.x === neck.x - 1 && head.y === neck.y) return "left";

  return "right";
};

const reducer = (state: Game, action: Action) => {
  switch (action.type) {
    case "move": {
      if (state.isEnd) return state;
      const head = state.snake[0];
      const neck = state.snake[1];
      const delta = DIRECTION_TO_DELTA_MOVEMENTS[action.direction];
      const newHead = { x: head.x + delta.x, y: head.y + delta.y };

      // snake cannot move back
      if (isSameCell(newHead, neck)) return state;

      // when collide with border or snake body, set game end
      if (
        isOutsideBoard(newHead) ||
        isInsideSnake(newHead, state.snake.slice(0, -1))
      )
        return { ...state, isEnd: true };

      // eat apple
      if (isSameCell(newHead, state.apple)) {
        return {
          ...state,
          snake: [newHead, ...state.snake],
          apple: createNewApple(state.snake),
          score: state.score + 1,
        };
      }

      return { ...state, snake: [newHead, ...state.snake.slice(0, -1)] };
    }
    case "reset":
      return INITIAL_GAME;
    default:
      return state;
  }
};
const SnakeGame: FC = () => {
  const [game, dispatch] = useReducer(reducer, INITIAL_GAME);
  const autoMove = useEffectEvent(() => {
    const direction = getAutoMoveDirection(game.snake);
    dispatch({ type: "move", direction });
  });
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const direction = KEY_TO_DIRECTION[e.key.toLowerCase()];
      if (!direction) return;
      dispatch({ type: "move", direction });
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      autoMove();
    }, AUTO_MOVE_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto w-fit text-center">
      <span>Score: {game.score}</span>
      <div
        className="grid border border-black"
        style={{ gridTemplateColumns: `repeat(${BOARD_WIDTH}, 1fr)` }}
      >
        {Array.from({ length: BOARD_HEIGHT }, (_, y) =>
          Array.from({ length: BOARD_WIDTH }, (_, x) => (
            <div
              key={`[${x}, ${y}]`}
              className={clsx(
                "h-10 w-10",
                {
                  "bg-orange-400": isSameCell(game.apple, { x, y }),
                },
                {
                  "bg-green-400": game.snake.some(
                    (segment) => isSameCell(segment, { x, y }) && !game.isEnd,
                  ),
                },
                {
                  "bg-rose-400": game.snake.some(
                    (segment) => isSameCell(segment, { x, y }) && game.isEnd,
                  ),
                },
              )}
            />
          )),
        )}
      </div>
    </div>
  );
};

export default SnakeGame;
