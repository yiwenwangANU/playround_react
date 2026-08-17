import type { FC } from "react";

interface Props {
  loanAmount: number;
  loanTerm: number;
  monthlyPaymentAmount: number;
}

const Report: FC<Props> = ({ loanAmount, loanTerm, monthlyPaymentAmount }) => {
  const totalPaymentAmount = monthlyPaymentAmount * loanTerm * 12;
  const totalInterest = totalPaymentAmount - loanAmount;
  return (
    <div>
      <div>
        Monthly Payment Amount:{" "}
        <span className="font-bold">${monthlyPaymentAmount.toFixed(2)}</span>
      </div>
      <div>
        Total Payment Amount:{" "}
        <span className="font-bold">${totalPaymentAmount.toFixed(2)}</span>
      </div>
      <div>
        Total Interest Paid:{" "}
        <span className="font-bold">${totalInterest.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Report;
