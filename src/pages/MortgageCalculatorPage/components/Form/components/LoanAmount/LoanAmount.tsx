import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

const LoanAmount: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <>
      <label htmlFor="loanAmount">Loan Amount:</label>
      <input
        className="border"
        {...register("loanAmount", { valueAsNumber: true })}
        type="number"
        id="loanAmount"
      />
      {errors.loanAmount && (
        <div className="col-span-2 text-red-500">
          {errors.loanAmount.message}
        </div>
      )}
    </>
  );
};

export default LoanAmount;
