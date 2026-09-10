import type { FC } from "react";
import type { Schema } from "../../loanSchema";
import calculateLoan from "./utils/calculateLoan";

interface Props {
  loan: Schema | null;
}

const Calculator: FC<Props> = ({ loan }) => {
  const { monthlyAmount, totalAmount, totalInterest } = calculateLoan(loan);

  return (
    <div className="mt-2 space-y-2">
      <div>
        Monthly Payment Amount:{" "}
        <span className="font-bold">{monthlyAmount}</span>
      </div>
      <div>
        Total Payment Amount: <span className="font-bold">{totalAmount}</span>
      </div>
      <div>
        Total Interest Paid: <span className="font-bold">{totalInterest}</span>
      </div>
    </div>
  );
};

export default Calculator;
