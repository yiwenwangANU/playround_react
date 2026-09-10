import { useState, type FC } from "react";

import Calculator from "./components/Calculator";

const MortgageCalculatorPage: FC = () => {
  const [loan, setLoan] = useState<Schema>();

  return (
    <div>
      <Form />
      <Calculator />
    </div>
  );
};

export default MortgageCalculatorPage;
