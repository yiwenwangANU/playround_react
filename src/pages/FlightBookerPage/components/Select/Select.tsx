import type { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { Schema } from "../../FlightBookerSchema";

const Select: FC = () => {
  const { control } = useFormContext<Schema>();
  const { field } = useController({ control, name: "flightType" });

  return (
    <>
      <label htmlFor="flightType" className="font-bold">
        Flight type
      </label>
      <select
        id="flightType"
        onChange={(e) => field.onChange(e.target.value)}
        className="rounded border border-black px-2 py-0.5"
      >
        <option value="oneWay">One-way flight</option>
        <option value="roundTrip">Round-trip flight</option>
      </select>
    </>
  );
};

export default Select;
