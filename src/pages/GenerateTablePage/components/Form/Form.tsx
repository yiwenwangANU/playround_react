import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  schema,
  type Schema,
} from "@/pages/GenerateTablePage/generateTableSchema";
import Field from "./components/Field";
import Button from "@/components/Button";

interface Props {
  onSubmit: (data: Schema) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const methods = useForm({ resolver: zodResolver(schema) });
  const handleOnSubmit = (data: Schema) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleOnSubmit)}
        className="grid w-80 grid-cols-[auto_1fr] gap-2"
      >
        <Field name="rows" label="rows" />
        <Field name="cols" label="columns" />
        <Button>Submit</Button>
      </form>
    </FormProvider>
  );
};

export default Form;
