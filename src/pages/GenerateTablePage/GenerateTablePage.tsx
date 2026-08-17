import type { FC } from "react";
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

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-fit">
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)} />
      </FormProvider>
      {methods.formState.isSubmitSuccessful && (
        <Table
          rows={methods.getValues("rows")}
          cols={methods.getValues("cols")}
        />
      )}
    </div>
  );
};

export default GenerateTablePage;
