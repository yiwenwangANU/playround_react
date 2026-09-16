import { useState, type FC } from "react";
import Form from "./compnents/Form";
import type { Schema } from "./dataRollerSchema";
import DicePanel from "./compnents/DicePanel";

const DiceRollerPage: FC = () => {
  const [diceFaces, setDiceFaces] = useState<number[]>([]);

  const handleSubmit = (data: Schema) => {
    const faces = Array.from({ length: data.diceNum }, () =>
      Math.floor(Math.random() * 6),
    );
    setDiceFaces(faces);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Form onSubmit={handleSubmit} />
      {diceFaces.length !== 0 && <DicePanel diceFaces={diceFaces} />}
    </div>
  );
};

export default DiceRollerPage;
