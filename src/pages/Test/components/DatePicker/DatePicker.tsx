import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../Test";

interface Props {
  name: "departure" | "return";
}

const DatePicker: FC<Props> = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });

  return (
    <>
      <input type="date" {...field} />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default DatePicker;
