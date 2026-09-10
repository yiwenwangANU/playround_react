import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import type { Schema } from "@/pages/MortgageCalculatorPage/loanSchema";

interface Props {
  name: "loanAmount" | "loanTerm" | "interestRate";
  label: string;
}

const Field: FC<Props> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });

  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <Input
        id={name}
        {...field}
        type="number"
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
      />
      {errors[name] && (
        <div className="col-span-2 text-rose-500">{errors[name].message}</div>
      )}
    </>
  );
};

export default Field;
