import { useState, type FC } from "react";

const DIMS = 3;
const CONNECTION_TO_WIN = 3;
const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1],
];
type Turn = "X" | "O";
type Cell = Turn | null;

const TicTacToePage: FC = () => {
  const [board, setBoard] = useState<Cell[][]>(
    Array.from({ length: DIMS }, () => Array(DIMS).fill(null)),
  );
  const [turn, setTurn] = useState<Turn>("X");
  const [winner, setWinner] = useState<Turn | null>(null);

  const handleClick = (i: number, j: number) => {
    if (board[i][j] !== null || winner) return;
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[i] = [...newBoard[i]];
      newBoard[i][j] = turn;
      return newBoard;
    });
    checkWin(i, j, turn, board);
    if (!winner) setTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  const checkWin = (x: number, y: number, turn: Turn, board: Cell[][]) => {
    for (const [dx, dy] of DIRECTIONS) {
      let connection = 1;
      for (const sign of [1, -1]) {
        let step = 1;

        while (true) {
          const nx = x + step * sign * dx;
          const ny = y + step * sign * dy;

          if (
            nx < DIMS &&
            nx >= 0 &&
            ny < DIMS &&
            ny >= 0 &&
            board[nx][ny] === turn
          ) {
            connection++;
            if (connection >= CONNECTION_TO_WIN) {
              setWinner(turn);
              return;
            }
            step++;
          } else break;
        }
      }
    }
  };

  return (
    <div className="mx-auto w-fit text-center">
      <div>{winner ? `${winner} wins` : `${turn}'s turn`}</div>
      <div
        className="grid w-fit border-r border-b border-black"
        style={{ gridTemplateColumns: `repeat(${DIMS}, 1fr)` }}
      >
        {board.map((row, i) =>
          row.map((cell, j) => (
            <button
              key={`${i}/${j}`}
              className="h-10 w-10 border-t border-l"
              onClick={() => handleClick(i, j)}
            >
              {cell}
            </button>
          )),
        )}
      </div>
    </div>
  );
};

export default TicTacToePage;
