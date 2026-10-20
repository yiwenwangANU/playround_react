import type { Schema } from "@/pages/MortgageCalculatorPage/schema";
import type { FC } from "react";

interface Props {
  mortgage: Schema | null;
}

const Mortgage: FC<Props> = ({ mortgage }) => {
  if (mortgage === null) return;
  const { loanAmount, loanTerm, interestRate } = mortgage;
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** (loanTerm * 12)) /
    ((1 + monthlyInterestRate) ** (loanTerm * 12) - 1);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="space-y-2">
      <div>
        Monthly Payment Amount:{" "}
        <span className="font-bold">{formatter.format(monthlyPayment)}</span>
      </div>
      <div>
        Total Payment Amount:{" "}
        <span className="font-bold">
          {formatter.format(monthlyPayment * loanTerm * 12)}
        </span>
      </div>
      <div>
        Total Interest Paid:{" "}
        <span className="font-bold">
          {formatter.format(monthlyPayment * loanTerm * 12 - loanAmount)}
        </span>
      </div>
    </div>
  );
};

export default Mortgage;
