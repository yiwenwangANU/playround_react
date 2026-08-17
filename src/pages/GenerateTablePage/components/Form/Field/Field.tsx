import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../GenerateTablePage";

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
      <label htmlFor={name}>{label}</label>
      <input
        {...field}
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
        id={name}
        type="number"
        className="border border-gray-800 px-1 py-0.5"
      />
      {errors[name] && (
        <span className="col-span-2 text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default Field;
