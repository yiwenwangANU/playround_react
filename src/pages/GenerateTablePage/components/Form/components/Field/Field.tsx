import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../GenerateTablePage";

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
      <label htmlFor={name} className="text-left">
        {label}
      </label>
      <input
        className="border border-black px-1 py-0.5"
        id={name}
        {...field}
        type="number"
        onChange={(e) => field.onChange(e.target.valueAsNumber)}
      />
      {errors[name] && (
        <span className="col-span-2 text-rose-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default Field;
