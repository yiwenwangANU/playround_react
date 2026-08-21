const getMonthlyPayment = (
  loanAmount: number,
  loanTerm: number,
  interestRate: number,
) => {
  const p = loanAmount;
  const i = interestRate / 12 / 100;
  const n = loanTerm * 12;
  return (p * i * (1 + i) ** n) / ((1 + i) ** n - 1);
};

export default getMonthlyPayment;
