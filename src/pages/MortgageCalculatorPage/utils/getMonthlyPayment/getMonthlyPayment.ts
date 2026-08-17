const getMonthlyPayment = (
  loanAmount: number,
  loanTerm: number,
  interestRate: number,
): number => {
  const monthlyRate = interestRate / 12 / 100;
  const totalTerms = loanTerm * 12;
  const result =
    (loanAmount * (monthlyRate * (1 + monthlyRate) ** totalTerms)) /
    ((1 + monthlyRate) ** totalTerms - 1);
  console.log(result);
  return result;
};

export default getMonthlyPayment;
