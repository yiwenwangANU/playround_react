import type { FC } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FlightSelector from "./components/FlightSelector";
import DatePicker from "./components/DatePicker/DatePicker";

const schema = z
  .object({
    flightType: z.enum(["oneWay", "roundTrip"]),
    departure: z.iso.date(),
    return: z.iso.date().optional(),
  })
  .superRefine((data, ctx) => {
    const today = new Date().toISOString();
    if (data.departure <= today) {
      ctx.addIssue({
        code: "custom",
        message: "Departure date should no early than today.",
        path: ["departure"],
      });
    }
    if (data.flightType === "roundTrip" && !data.return) {
      ctx.addIssue({
        code: "custom",
        message: "Please choose return date.",
        path: ["return"],
      });
      return;
    }
    if (data.return && data.departure > data.return) {
      ctx.addIssue({
        code: "custom",
        message: "Return date should no early than departure date.",
        path: ["return"],
      });
    }
  });

export type Schema = z.infer<typeof schema>;

const Test: FC = () => {
  const methods = useForm({
    shouldUnregister: true,
    resolver: zodResolver(schema),
  });

  const flightTypeValue = useWatch({control: methods.control, name: 'flightType'})

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-2 w-100 mx-auto">
        <FlightSelector />
        <DatePicker name="departure" />
        {flightTypeValue ==='roundTrip' && <DatePicker name="return" />}
        <button type="submit" className="w-fit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Test;
