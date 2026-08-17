import type { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "./components/InputField";
import TextareaField from "./components/TextareaField";
import Button from "../../components/Button";
import useCreateMessage from "./hooks/useCreateMessage";

const URL = "https://questions.greatfrontend.com/api/questions/contact-form";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid Email"),
  message: z.string().min(1, "Message is required"),
});

export type Schema = z.infer<typeof schema>;

const ContactFormPage: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const { data, trigger, isMutating, error } = useCreateMessage(URL);

  const onSubmit = (data: Schema) => trigger(data);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto flex w-120 flex-col justify-center gap-2"
      >
        <InputField name="name" label="Name" />
        <InputField name="email" label="Email" />
        <TextareaField name="message" label="Message" />
        <Button type="submit" className="w-fit" disabled={isMutating}>
          {isMutating ? 'Sending... ' : 'Submit'}
        </Button>
        {isMutating && <span>Sending data...</span>}
        {error && <span className="text-red-500">Something went wrong...</span>}
        {data && <span className="text-green-700">{data}</span>}
      </form>
    </FormProvider>
  );
};

export default ContactFormPage;
