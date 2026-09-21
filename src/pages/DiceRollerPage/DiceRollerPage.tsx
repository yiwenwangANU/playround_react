import { useState, type FC } from "react";
import Form from "./components/Form";
import DicePanel from "./components/DicePanel";

const DiceRollerPage: FC = () => {
  const [dices, setDices] = useState<number[]>([]);
  const handleSubmit = (diceNum: number) => {
    setDices(
      Array.from({ length: diceNum }, () => Math.floor(Math.random() * 6)),
    );
  };

  return (
    <main className="mx-auto w-fit space-y-9">
      <Form onSubmit={handleSubmit} />
      <DicePanel dices={dices} />
    </main>
  );
};

export default DiceRollerPage;
