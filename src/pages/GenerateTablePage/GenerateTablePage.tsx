import { useState, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import Form from "./components/Form/Form";
import Table from "./components/Table";

const schema = z.object({
  rows: z
    .int("Rows needs to be positive integer.")
    .min(1, "Rows needs to be positive integer."),
  cols: z
    .int("Columns needs to be positive integer.")
    .min(1, "Columns needs to be positive integer."),
});

export type Schema = z.infer<typeof schema>;

const GenerateTablePage: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  type TableInputs = {
    rows: number;
    cols: number;
  };
  const [tableInputs, setTableInputs] = useState<TableInputs | null>(null);

  const onSubmit = (data: Schema) => {
    setTableInputs({
      rows: data.rows,
      cols: data.cols,
    });
  };

  return (
    <div className="mx-auto w-fit">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} />
      </FormProvider>
      {tableInputs && <Table rows={tableInputs.rows} cols={tableInputs.cols} />}
    </div>
  );
};

export default GenerateTablePage;
