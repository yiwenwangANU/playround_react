import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../ContactFormPage";

interface Props {
  fieldType: "input" | "textarea";
  name: "name" | "email" | "message";
  label: string;
}

const Field: FC<Props> = ({ fieldType, name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });

  return (
    <>
      <label>{label}</label>
      {fieldType === "textarea" ? (
        <textarea {...field} className="border border-black px-1 py-0.5" />
      ) : (
        <input {...field} className="border border-black px-1 py-0.5" />
      )}
      {errors[name] && (
        <span className="col-span-2 text-rose-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default Field;
