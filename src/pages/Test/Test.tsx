import { useState, type FC } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FlightSelector from "./components/FlightSelector";
import DatePicker from "./components/DatePicker/DatePicker";
import Modal from "../../components/Modal";

const schema = z
  .object({
    flightType: z.enum(["oneWay", "roundTrip"]),
    departure: z.iso.date(),
    return: z.iso.date().optional(),
  })
  .superRefine((data, ctx) => {
    const today = new Date().toISOString().slice(0, 10);
    if (data.departure < today) {
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
    defaultValues: {
      flightType: "oneWay",
      departure: new Date().toISOString().slice(0, 10),
    },
  });

  const flightTypeValue = useWatch({
    control: methods.control,
    name: "flightType",
  });

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [submittedData, setSubmittedData] = useState<Schema | null>(null)

  const handleModalClose = () => setModalOpen(false)

  const onSubmit = (data: Schema) => {
    setSubmittedData(data)
    setModalOpen(true)
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto flex w-100 flex-col gap-2"
      >
        <FlightSelector />
        <DatePicker name="departure" />
        {flightTypeValue === "roundTrip" && <DatePicker name="return" />}
        <button type="submit" className="w-fit">
          Submit
        </button>
      </form>
      <Modal onClose={handleModalClose} isOpen={modalOpen}>
        {submittedData && (
          <div className="space-y-1">
            <div>
              Flight type:{" "}
              <span className="font-bold">{submittedData.flightType}</span>
            </div>
            <div>
              Departure:{" "}
              <span className="font-bold">{submittedData.departure}</span>
            </div>
            {submittedData.return && (
              <div>
                Return: <span className="font-bold">{submittedData.return}</span>
              </div>
            )}
          </div>
        )}
      </Modal>
    </FormProvider>
  );
};

export default Test;
