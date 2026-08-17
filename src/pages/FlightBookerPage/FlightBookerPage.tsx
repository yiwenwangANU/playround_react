import type { FC } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, addDays } from "date-fns";
import { z } from "zod";
import FlightTypeField from "./components/FlightTypeField";
import DatePickField from "./components/DatePickField/DatePickField";

const schema = z
  .object({
    flightType: z.enum(["oneWay", "roundTrip"]),
    departure: z.iso.date(),
    return: z.iso.date().optional(),
  })
  .superRefine((data, ctx) => {
    const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd')
    if (tomorrow > data.departure) {
      ctx.addIssue({
        code: "custom",
        message: "Departure date must be after today",
        path: ["departure"],
      });
      return;
    }
    if (data.flightType === "roundTrip") {
      if (!data.return) {
        ctx.addIssue({
          code: "custom",
          message: "Return date is required.",
          path: ["return"],
        });
        return;
      }
      if (data.departure > data.return) {
        ctx.addIssue({
          code: "custom",
          message: "Return date must be after departure date",
          path: ["return"],
        });
      }
    }
  });

export type Schema = z.infer<typeof schema>;

const FlightBookerPage: FC = () => {
  const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");
  const methods = useForm({
    shouldUnregister: true,
    resolver: zodResolver(schema),
    defaultValues: {
      flightType: "oneWay",
      departure: tomorrow,
      return: tomorrow,
    },
  });

  const flightType = useWatch({ name: "flightType", control: methods.control });
  const departure = useWatch({ name: "departure", control: methods.control });

  const onSubmit = (data: Schema) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto flex w-100 flex-col gap-2"
        noValidate
      >
        <FlightTypeField />
        <DatePickField name="departure" min={tomorrow} />
        {flightType === "roundTrip" && (
          <DatePickField name="return" min={departure} />
        )}
        <button
          type="submit"
          className="w-fit rounded border border-gray-400 bg-gray-200 px-1.5 py-0.5 hover:cursor-pointer"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default FlightBookerPage;
