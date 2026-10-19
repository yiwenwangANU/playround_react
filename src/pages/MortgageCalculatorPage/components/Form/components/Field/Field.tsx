import Input from "@/components/Input";
import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../schema";

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
    <div className="grid grid-cols-[1fr_1fr]">
      <label htmlFor={name}>{label}</label>
      <Input
        id={name}
        value={field.value}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
      />
      {errors[name] && (
        <div className="col-span-2 text-rose-500">{errors[name].message}</div>
      )}
    </div>
  );
};

export default Field;
