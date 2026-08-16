import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

interface Props {
  name: "loanAmount" | "loanTerm" | "interestRate" | "salary" | 'centlink';
  label: string;
}

const InputField: FC<Props> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name, control });

  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        className="border px-2"
        value={field.value}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
        type="number"
        id={name}
      />
      {errors[name] && (
        <span className="col-span-2 text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default InputField;
