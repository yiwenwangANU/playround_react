import type { FC } from "react";
import { useFormContext, useController } from "react-hook-form";
import Input from "@components/Input";
import type { Schema } from "@pages/ContactFormPage";

interface Props {
  label: string;
  name: "name" | "email" | "message";
}

const InputField: FC<Props> = ({ label, name }) => {
  const { control } = useFormContext<Schema>();
  const {
    field,
    formState: { errors },
  } = useController({ control, name });
  return (
    <div className="grid grid-cols-[1fr_4fr] items-center gap-2">
      <label className="capitalize" htmlFor={name}>
        {label}
      </label>
      <Input {...field} id={name} />
      {errors[name] && (
        <div className="col-span-2 text-rose-500">{errors[name].message}</div>
      )}
    </div>
  );
};

export default InputField;
