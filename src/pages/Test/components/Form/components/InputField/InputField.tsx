import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../Test";

interface Props {
  label: string;
  name: "loanAmount" | "loanTerm" | "interestRate";
}

const InputField: FC<Props> = ({ label, name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });

  return (
    <>
      <label>{label}:</label>
      <input
        className="border border-black px-1 py-0.5"
        type="number"
        {...field}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
      />
      {errors[name] && (
        <span className="col-span-2 text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default InputField;
