import type { FC } from "react";
import Form from "./compnents/Form";
import type { Schema } from "./dataRollerSchema";

const DiceRollerPage: FC = () => {
  const handleSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-100">
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default DiceRollerPage;
