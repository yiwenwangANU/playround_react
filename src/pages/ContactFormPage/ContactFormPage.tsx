import type { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import Field from "./components/Field";
import Button from "../../components/Button";

const schema = z.object({
  name: z.string("Please enter your name."),
  email: z.email("Please enter a valid email."),
  message: z.string("Please enter your message."),
});

export type Schema = z.infer<typeof schema>;

const ContactFormPage: FC = () => {
  const methods = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data: Schema) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto grid w-100 grid-cols-[auto_1fr] gap-2"
      >
        <Field name="name" />
        <Field name="email" />
        <Field name="message" fieldType="textArea" />
        <Button className="col-span-2 w-fit" type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default ContactFormPage;
