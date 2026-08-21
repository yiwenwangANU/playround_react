import type { FC } from "react";
import getMonthlyPayment from "./utils/getMonthlyPayment";

interface Props {
  loanAmount: number;
  loanTerm: number;
  interestRate: number;
}

const Calculator: FC<Props> = ({ loanAmount, loanTerm, interestRate }) => {
  const monthlyPayment = getMonthlyPayment(loanAmount, loanTerm, interestRate);
  const totalPayment = monthlyPayment * loanTerm * 12;

  return (
    <div className="mx-auto mt-5 w-fit space-y-2">
      <div>
        Monthly Payment Amount:{" "}
        <span className="font-bold">${monthlyPayment.toFixed(2)}</span>
      </div>
      <div>Total Payment Amount: ${totalPayment.toFixed(2)}</div>
      <div>Total Interest Paid: ${(totalPayment - loanAmount).toFixed(2)}</div>
    </div>
  );
};

export default Calculator;
