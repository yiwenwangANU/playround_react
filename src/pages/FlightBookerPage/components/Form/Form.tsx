import type { FC } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Select from "./components/Select";
import DatePicker from "./components/DatePicker";
import type { Schema } from "../../FlightBookerPage";
interface Props {
  onSubmit: () => void;
}
const Form: FC<Props> = ({ onSubmit }) => {
  const { control } = useFormContext<Schema>();
  const flight = useWatch({ control, name: "flightType" });
  return (
    <form onSubmit={onSubmit} className="flex w-100 flex-col gap-2">
      <Select />
      <DatePicker name="departureDate" />
      {flight === "roundTrip" && <DatePicker name="returnDate" />}
      <button className="w-fit rounded border border-gray-400 bg-gray-200 px-2 py-0.5">
        Submit
      </button>
    </form>
  );
};

export default Form;
