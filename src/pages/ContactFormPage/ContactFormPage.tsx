import type { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import Field from "./components/Field";
import Button from "../../components/Button";
import useCreateMessage from "./hooks/useCreateMessage";

const schema = z.object({
  name: z.string("Please enter your name."),
  email: z.email("Please enter a valid email."),
  message: z.string("Please enter your message."),
});

export type Schema = z.infer<typeof schema>;

const ContactFormPage: FC = () => {
  const methods = useForm({ resolver: zodResolver(schema) });
  const { mutate, isPending, data, isError } = useCreateMessage();

  const onSubmit = (data: Schema) => {
    console.log(data);
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-120 space-y-2">
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="grid grid-cols-[auto_1fr] gap-2"
        >
          <Field name="name" />
          <Field name="email" />
          <Field name="message" fieldType="textArea" />
          <Button
            className="col-span-2 w-fit"
            type="submit"
            disabled={isPending}
          >
            Submit
          </Button>
        </form>
        {data && <div className="text-green-500">{data}</div>}
        {isError && <div className="text-rose-500">Something went wrong.</div>}
      </div>
    </FormProvider>
  );
};

export default ContactFormPage;
