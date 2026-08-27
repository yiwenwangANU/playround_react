import { useState, type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";
import Table from "./components/Table";

const positiveNumber = z
  .number("Please provide a positive number.")
  .int("Please provide a positive number.")
  .min(1, "Please provide a positive number.");

const schema = z.object({
  rows: positiveNumber,
  cols: positiveNumber,
});

export type Schema = z.infer<typeof schema>;

type Table = {
  rows: number;
  cols: number;
};

const GenerateTablePage: FC = () => {
  const [table, setTable] = useState<Table | null>(null);
  const methods = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: Schema) => {
    setTable({
      rows: data.rows,
      cols: data.cols,
    });
  };
  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-fit space-y-5 text-center">
        <Form onSubmit={methods.handleSubmit(onSubmit)} />
        {table && <Table rows={table.rows} cols={table.cols} />}
      </div>
    </FormProvider>
  );
};

export default GenerateTablePage;
