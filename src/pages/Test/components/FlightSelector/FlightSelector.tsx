import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../Test";

const FlightSelector: FC = () => {
  const { control } = useFormContext<Schema>();
  const { field } = useController({ name: "flightType", control });

  return (
    <select
      onChange={(e) => field.onChange(e.target.value)}
      value={field.value}
    >
      <option value="oneWay">One-way flight</option>
      <option value="roundTrip">Round-trip flight</option>
    </select>
  );
};

export default FlightSelector;
