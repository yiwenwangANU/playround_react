import type { FC } from "react";
import dice1 from "./assets/dice1.svg";
import dice2 from "./assets/dice2.svg";
import dice3 from "./assets/dice3.svg";
import dice4 from "./assets/dice4.svg";
import dice5 from "./assets/dice5.svg";
import dice6 from "./assets/dice6.svg";

const diceFaces = [dice1, dice2, dice3, dice4, dice5, dice6];

interface Props {
  diceNum: number;
}

const DicePanel: FC<Props> = ({ diceNum }) => {
  const diceList = Array.from({ length: diceNum }, () =>
    Math.ceil(Math.random() * 6),
  );

  return (
    <div className="grid w-fit grid-cols-3 gap-2 rounded bg-gray-200 p-2">
      {diceList.map((dice, i) => (
        <img src={diceFaces[dice - 1]} key={i} />
      ))}
    </div>
  );
};

export default DicePanel;
