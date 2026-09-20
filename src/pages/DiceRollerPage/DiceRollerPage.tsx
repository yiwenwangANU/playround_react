import { useState, type FC } from "react";
import Form from "./components/Form";
import DicePanel from "./components/DicePanel";

const DiceRollerPage: FC = () => {
  const [diceList, setDiceList] = useState<number[]>([]);
  const handleSubmit = (diceNum: number) => {
    const diceList = Array.from({ length: diceNum }, () =>
      Math.floor(Math.random() * 6),
    );
    setDiceList(diceList);
  };
  
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Form onSubmit={handleSubmit} />
      <DicePanel diceList={diceList} />
    </div>
  );
};

export default DiceRollerPage;
