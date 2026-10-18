import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type Schema } from "./schema";

const Form: FC = () => {
  const methods = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}></form>
    </FormProvider>
  );
};

export default Form;
