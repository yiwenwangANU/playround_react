import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  schema,
  type Schema,
} from "@/pages/GenerateTablePage/generateTableSchema";
import Field from "./components/Field";
import Button from "@/components/Button";

const Form: FC = () => {
  const methods = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data: Schema) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="grid grid-cols-[auto_1fr] gap-2 w-80">
        <Field name="rows" label="rows" />
        <Field name="cols" label="columns" />
        <Button>Submit</Button>
      </form>
    </FormProvider>
  );
};

export default Form;
