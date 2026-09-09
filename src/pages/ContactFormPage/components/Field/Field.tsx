import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../ContactFormPage";
import Input from "../../../../components/Input";

interface Props {
  name: "name" | "email" | "message";
  fieldType?: "input" | "textArea";
}

const Field: FC<Props> = ({ name, fieldType = "input" }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });

  return (
    <>
      <label htmlFor={name} className="capitalize">
        {name}:
      </label>
      {fieldType === "input" && <Input {...field} id={name} />}
      {fieldType === "textArea" && (
        <textarea {...field} id={name} className="border border-black px-0.5" />
      )}
      {errors.name && (
        <div className="col-span-2 text-rose-500">{errors.name.message}</div>
      )}
    </>
  );
};

export default Field;
