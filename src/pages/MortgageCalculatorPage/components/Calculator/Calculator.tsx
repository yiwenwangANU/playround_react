import type { FC } from "react";
import type { Schema } from "../../MortgageCalculatorPage";

interface Props {
  loan: Schema | null;
}

const Calculator: FC<Props> = ({ loan }) => {
  if (!loan)
    return (
      <div>
        <div>Monthly Payment Amount: </div>
        <div>Total Payment Amount: </div>
        <div>Total Interest Paid: </div>
      </div>
    );
  const { loanAmount, loanTerm, interestRate } = loan;
  const monthlyRate = interestRate / 12 / 100;
  const monthlyPayment =
    (loanAmount * (monthlyRate * (1 + monthlyRate) ** (loanTerm * 12))) /
    ((1 + monthlyRate) ** (loanTerm * 12) - 1);

  const totalPayment = monthlyPayment * (loan.loanTerm * 12);
  const totalInterest = totalPayment - loan.loanAmount;
  return (
    <div>
      <div>
        Monthly Payment Amount:{" "}
        <span className="font-bold">${monthlyPayment.toFixed(2)}</span>
      </div>
      <div>
        Total Payment Amount:{" "}
        <span className="font-bold">${totalPayment.toFixed(2)}</span>
      </div>
      <div>
        Total Interest Paid:{" "}
        <span className="font-bold">${totalInterest.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Calculator;
