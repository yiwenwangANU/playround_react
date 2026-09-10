import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { format, addDays } from "date-fns";
import { type Schema } from "@/pages/FlightBookerPage/FlightBookerSchema";

const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");

interface Props {
  name: "departureDate" | "returnDate";
}

const DatePicker: FC<Props> = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Schema>();
  const { field } = useController({ control, name });

  return (
    <>
      <input
        {...field}
        type="date"
        className="rounded border border-gray-400 px-1 py-0.5"
        min={tomorrow}
      />
      {errors[name] && (
        <div className="text-rose-500">{errors[name].message}</div>
      )}
    </>
  );
};

export default DatePicker;
