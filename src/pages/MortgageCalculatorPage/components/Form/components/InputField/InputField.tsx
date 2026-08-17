import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

interface Props {
  name: "loanAmount" | "loanTerm" | "interestRate";
  label: string;
}

const InputField: FC<Props> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });

  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        className="border-1 px-1 py-0.5"
        id={name}
        {...field}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
        type="number"
      />
      {errors[name] && (
        <span className="col-span-2 text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default InputField;
