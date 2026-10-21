import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { addDays, format } from "date-fns";
import type { Schema } from "../../FlightBookerSchema";

interface Props {
  name: "departureDate" | "returnDate";
  label: string;
}

const DatePicker: FC<Props> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });
  return (
    <>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        id={name}
        type="date"
        {...field}
        className="rounded border border-black px-1 py-0.5"
        min={format(addDays(new Date(), 1), "yyyy-MM-dd")}
      />
      {errors[name] && (
        <div className="text-red-500">{errors[name].message}</div>
      )}
    </>
  );
};

export default DatePicker;
