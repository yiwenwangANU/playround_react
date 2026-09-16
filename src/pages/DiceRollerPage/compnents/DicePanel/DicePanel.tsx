import type { FC } from "react";
import dice1 from "./assets/dice1.svg";
import dice2 from "./assets/dice2.svg";
import dice3 from "./assets/dice3.svg";
import dice4 from "./assets/dice4.svg";
import dice5 from "./assets/dice5.svg";
import dice6 from "./assets/dice6.svg";

const DICE_FACES = [dice1, dice2, dice3, dice4, dice5, dice6];

interface Props {
  diceFaces: number[];
}

const DicePanel: FC<Props> = ({ diceFaces }) => (
  <div className="grid grid-cols-3 gap-2 rounded bg-gray-200 p-4">
    {diceFaces.map((diceFace) => (
      <img src={DICE_FACES[diceFace]} />
    ))}
  </div>
);

export default DicePanel;
