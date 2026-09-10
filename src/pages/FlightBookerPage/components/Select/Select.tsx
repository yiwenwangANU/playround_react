import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { type Schema } from "@/pages/FlightBookerPage/FlightBookerSchema";

const Select: FC = () => {
  const { control } = useFormContext<Schema>();
  const { field } = useController({ control, name: "flightType" });

  return (
    <select
      {...field}
      className="bodder-gray-400 rounded border bg-gray-200 px-1 py-0.5"
    >
      <option value="oneWay">One-Way</option>
      <option value="roundTrip">Round-Trip</option>
    </select>
  );
};

export default Select;
