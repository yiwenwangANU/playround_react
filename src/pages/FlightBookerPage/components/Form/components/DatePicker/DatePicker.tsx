import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { addDays, format } from "date-fns";
import type { Schema } from "../../../../FlightBookerPage";

interface Props {
  name: "departureDate" | "returnDate";
}

const DatePicker: FC<Props> = ({ name }) => {
  const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");
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
        min={tomorrow}
        className="rounded border border-gray-400 px-1 py-0.5"
      />
      {errors[name] && (
        <span className="text-rose-500">{errors[name].message}</span>
      )}
    </>
  );
};

export default DatePicker;
