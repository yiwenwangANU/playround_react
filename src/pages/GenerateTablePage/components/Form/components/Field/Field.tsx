import Input from "@/components/Input";
import type { Schema } from "@/pages/GenerateTablePage/generateTableSchema";
import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";

interface Props {
  name: "rows" | "cols";
  label: string;
}

const Field: FC<Props> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name, control });

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
      <label htmlFor={name}>{label}</label>
      <Input
        id={name}
        {...field}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
        type="number"
      />
      {errors[name] && (
        <div className="col-span-2 text-rose-500">{errors[name].message}</div>
      )}
    </div>
  );
};

export default Field;
