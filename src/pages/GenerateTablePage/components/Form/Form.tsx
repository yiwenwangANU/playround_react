import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type Schema } from "../../generateTableSchema";
import Field from "./components/Field";

interface Props {
  onSubmit: (data: Schema) => void;
}
const Form: FC<Props> = ({ onSubmit }) => {
  const methods = useForm({ resolver: zodResolver(schema) });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto w-70 space-y-2"
      >
        <Field name="rows" label="Rows" />
        <Field name="cols" label="Cols" />
        <button className="cursor-pointer rounded bg-black px-2 py-0.5 text-white w-full">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
