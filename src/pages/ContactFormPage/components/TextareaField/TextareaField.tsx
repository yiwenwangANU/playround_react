import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../ContactFormPage";

interface Props {
  name: "message";
  label: string;
}

const TextareaField: FC<Props> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name: name, control });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea {...field} id={name} className="border-1 px-1" />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default TextareaField;
