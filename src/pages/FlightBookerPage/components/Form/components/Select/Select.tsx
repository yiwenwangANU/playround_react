import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../../../FlightBookerPage";

const Select: FC = () => {
  const { control } = useFormContext<Schema>();
  const { field } = useController({ control, name: "flightType" });

  return (
    <select
      {...field}
      className="rounded border border-gray-400 bg-gray-200 px-1 py-0.5"
    >
      <option value="oneWay">One-way flight</option>
      <option value="roundTrip">Round-trip flight</option>
    </select>
  );
};

export default Select;
