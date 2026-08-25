import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../MortgageCalculatorPage";

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
      <label>{label}</label>
      <input {...field} className="border border-black px-1 py-0.5" />
      {errors[name] && <span className="col-span-2 text-rose-500"></span>}
    </>
  );
};

export default Field;
