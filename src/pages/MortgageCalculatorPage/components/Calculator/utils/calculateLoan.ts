import type { Schema } from "@/pages/MortgageCalculatorPage/loanSchema";

type Result = {
  monthlyAmount: string;
  totalAmount: string;
  totalInterest: string;
};

const calculateLoan = (loan: Schema | null): Result => {
  if (!loan) return { monthlyAmount: "", totalAmount: "", totalInterest: "" };
  const { loanAmount, loanTerm, interestRate } = loan;
  const monthlyInterestRate = interestRate / 100 / 12;
  const monthlyAmount =
    (loanAmount *
      monthlyInterestRate *
      (1 + monthlyInterestRate) ** (loanTerm * 12)) /
    ((1 + monthlyInterestRate) ** (loanTerm * 12) - 1);
  const totalAmount = monthlyAmount * loanTerm * 12;
  const totalInterest = totalAmount - loanAmount;

  return {
    monthlyAmount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(monthlyAmount),
    totalAmount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalAmount),
    totalInterest: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalInterest),
  };
};

export default calculateLoan;
