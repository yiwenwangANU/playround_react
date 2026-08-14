import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

const InterestRate: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name: "interestRate", control });

  return (
    <>
      <label htmlFor="interestRate">Interest Rate: </label>
      <input
        className="border"
        value={field.value}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
        id="interestRate"
        type="number"
      />
      {errors.interestRate && (
        <div className="col-span-2 text-red-500">
          {errors.interestRate.message}
        </div>
      )}
    </>
  );
};

export default InterestRate;
