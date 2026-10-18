import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "./components/InputField/InputField";
import Button from "@components/Button";
import createPost from "@utils/createPost";

const schema = z.object({
  name: z.string("Name is required."),
  email: z.email("Please privide a valid email."),
  message: z.string("Message is required."),
});

export type Schema = z.infer<typeof schema>;

const ContactFormPage: FC = () => {
  const methods = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async (data: Schema) => {
    const response = await createPost(data);
    alert(response.data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="mx-auto flex w-100 flex-col gap-2"
      >
        <InputField label="name" name="name" />
        <InputField label="email" name="email" />
        <InputField label="message" name="message" />
        <Button className="w-fit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default ContactFormPage;
