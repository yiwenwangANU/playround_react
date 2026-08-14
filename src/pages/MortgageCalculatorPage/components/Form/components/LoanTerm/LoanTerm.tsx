import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

const LoanTerm: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name: "loanTerm", control });

  return (
    <>
      <label>loan Term: </label>
      <input
        className="border"
        value={field.value}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
        type="number"
        id="loanTerm"
      />
      {errors.loanTerm && (
        <div className="col-span-2 text-red-500">{errors.loanTerm.message}</div>
      )}
    </>
  );
};

export default LoanTerm;
