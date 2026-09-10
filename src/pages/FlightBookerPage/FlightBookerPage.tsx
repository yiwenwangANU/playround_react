import { useState, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { schema, type Schema } from "./FlightBookerSchema";
import Select from "./components/Select";
import DatePicker from "./components/DatePicker";
import Button from "@/components/Button";
import Dialog from "./components/Dialog";

const FlightBookerPage: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      flightType: "oneWay",
    },
    shouldUnregister: true,
  });
  const flightType = useWatch({ control: methods.control, name: "flightType" });
  const [formData, setFormData] = useState<Schema | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onSubmit = (data: Schema) => {
    setFormData(data);
    setModalOpen(true);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="mx-auto flex w-60 flex-col gap-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Select />
        <DatePicker name="departureDate" />
        {flightType === "roundTrip" && <DatePicker name="returnDate" />}
        <Button>Book</Button>
      </form>
      <Dialog
        data={formData}
        onClose={() => setModalOpen(false)}
        isOpen={modalOpen}
      />
    </FormProvider>
  );
};

export default FlightBookerPage;
