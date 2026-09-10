import { useState, type FC } from "react";
import Calculator from "./components/Calculator";
import type { Schema } from "@/pages/MortgageCalculatorPage/loanSchema";
import Form from "./components/Form";

const MortgageCalculatorPage: FC = () => {
  const [loan, setLoan] = useState<Schema | null>(null);
  const handleSubmit = (data: Schema) => {
    setLoan(data);
  };

  return (
    <div className="mx-auto w-fit">
      <Form onSubmit={handleSubmit} />
      <Calculator loan={loan} />
    </div>
  );
};

export default MortgageCalculatorPage;
