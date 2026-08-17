import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../FlightBookerPage";

interface Props {
  name: "return" | "departure";
  min: string;
}

const DatePickField: FC<Props> = ({ name, min }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ name, control });

  return (
    <>
      <input
        type="date"
        {...field}
        aria-label={`${name}-date`}
        min={min}
        className="rounded border border-gray-400"
      />
      {errors[name] && (
        <span className="text-red-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default DatePickField;
