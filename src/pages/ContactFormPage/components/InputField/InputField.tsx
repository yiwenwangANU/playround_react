import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../ContactFormPage";

interface Props {
  name: "name" | "email";
  label: string;
}

const InputField: FC<Props> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name: name, control });

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className="border-1 px-1 py-0.5" {...field} id={name} />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default InputField;
