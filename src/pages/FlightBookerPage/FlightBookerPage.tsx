import { useState, type FC } from "react";
import { addDays, format } from "date-fns";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";
import Dialog from "./components/Form/components/Dialog";

const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");

const schema = z
  .object({
    flightType: z.enum(["oneWay", "roundTrip"]),
    departureDate: z.iso.date(),
    returnDate: z.iso.date().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.departureDate < tomorrow) {
      ctx.addIssue({
        code: "custom",
        path: ["departureDate"],
        message: "Departure date should late than today.",
      });
    }
    if (data.flightType === "roundTrip" && !data.returnDate) {
      ctx.addIssue({
        code: "custom",
        path: ["returnDate"],
        message: "Return date is required.",
      });
    }
    if (
      data.flightType === "roundTrip" &&
      data.returnDate &&
      data.departureDate >= data.returnDate
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["returnDate"],
        message: "Return date should late than departure date.",
      });
    }
  });

export type Schema = z.infer<typeof schema>;

const FlightBookerPage: FC = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [flight, setFlight] = useState<Schema>({
    flightType: "oneWay",
    departureDate: tomorrow,
  });
  const methods = useForm({
    shouldUnregister: true,
    resolver: zodResolver(schema),
    defaultValues: {
      flightType: "oneWay",
      departureDate: tomorrow,
    },
  });

  const onSubmit = (data: Schema) => {
    setFlight(data);
    setDialogOpen(true);
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-fit">
        <Form onSubmit={methods.handleSubmit(onSubmit)} />
        <Dialog
          onClose={() => setDialogOpen(false)}
          isOpen={dialogOpen}
          flight={flight}
        />
      </div>
    </FormProvider>
  );
};

export default FlightBookerPage;
