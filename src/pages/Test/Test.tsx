import { useState, type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";
import Table from "./components/Table";

const schema = z.object({
  rows: z
    .number("Please enter a positive integer.")
    .min(1, "Please enter a positive integer.")
    .int("Please enter a positive integer."),
  cols: z
    .number("Please enter a positive integer.")
    .min(1, "Please enter a positive integer.")
    .int("Please enter a positive integer."),
});

export type Schema = z.infer<typeof schema>;

const Test: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      rows: 1,
      cols: 1,
    },
  });

  const [tableData, setTableData] = useState<Schema | null>(null);

  const onSubmit = (data: Schema) => {
    setTableData(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)} />
      {tableData && <Table rows={tableData.rows} cols={tableData.cols} />}
    </FormProvider>
  );
};

export default Test;
