import type { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Field from "./components/Field";
import useCreateMessage from "./hooks/useCreateMessage";

const URL = "https://questions.greatfrontend.com/api/questions/contact-form";

const schama = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.email("Email is invalid."),
  message: z.string("Message is required."),
});

export type Schema = z.infer<typeof schama>;

const ContactFormPage: FC = () => {
  const methods = useForm({ resolver: zodResolver(schama) });
  const { trigger, isMutating, data } = useCreateMessage(URL);
  const onSubmit = (data: Schema) => {
    trigger(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="mx-auto grid w-100 grid-cols-[auto_1fr] gap-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Field fieldType="input" name="name" label="Name: " />
        <Field fieldType="input" name="email" label="Email: " />
        <Field fieldType="textarea" name="message" label="Message: " />
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
          disabled={isMutating}
        >
          Submit
        </button>
        {data && <span className="text-green-300 col-span-2">{data}</span>}
      </form>
    </FormProvider>
  );
};

export default ContactFormPage;
