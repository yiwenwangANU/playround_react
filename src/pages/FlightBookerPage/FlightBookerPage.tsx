import { useState, type FC } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns";
import { schema, type Schema } from "./FlightBookerSchema";
import Select from "./components/Select";
import DatePicker from "./components/DatePicker";
import Dialog from "./components/Dialog";

const FlightBookerPage: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [flightInfo, setFlightInfo] = useState<Schema | null>(null);
  const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");
  const methods = useForm({
    resolver: zodResolver(schema),
    shouldUnregister: true,
    defaultValues: {
      flightType: "oneWay",
      departureDate: tomorrow,
      returnDate: tomorrow,
    },
  });
  const flightType = useWatch({ control: methods.control, name: "flightType" });

  const handleFormSubmit = (data: Schema) => {
    console.log(data);
    setOpen(true);
    setFlightInfo(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className="mx-auto flex w-60 flex-col gap-2"
      >
        <Select />
        <DatePicker name="departureDate" label="Departure Date" />
        {flightType === "roundTrip" && (
          <DatePicker name="returnDate" label="Return Date" />
        )}
        <button className="cursor-pointer rounded bg-black px-2 py-0.5 text-white">
          Book
        </button>
      </form>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        flightInfo={flightInfo}
      />
    </FormProvider>
  );
};

export default FlightBookerPage;
