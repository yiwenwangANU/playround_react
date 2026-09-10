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
  const { field } = useController({ control, name });

  return (
    <>
      <label htmlFor={name} className="capitalize">
        {label}:
      </label>
      <input
        className="border border-black px-1 py-0.5"
        {...field}
        id={name}
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
