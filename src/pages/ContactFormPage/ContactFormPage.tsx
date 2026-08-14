import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useCreateMessage from "./hooks/useCreateMessage";

const URL = 'https://questions.greatfrontend.com/api/questions/contact-form '

export const schema = z.object({
  name: z.string().min(1, "Invalid Name"),
  email: z.email("Invalid Email"),
  message: z.string().min(1, "Invalid Message"),
});

const ContactFormPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {data, isMutating, error, trigger} = useCreateMessage(URL)

  return (
    <form
      className="mx-auto flex w-200 flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        trigger(data);
      })}
    >
      <label htmlFor="name">Name</label>
      <Input {...register("name")} id="name" />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}
      <label htmlFor="email">Email</label>
      <Input {...register("email")} id="email" />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <label htmlFor="message">Message</label>
      <textarea
        className="border-1 p-1"
        {...register("message")}
        id="message"
      />
      {errors.message && (
        <span className="text-red-500">{errors.message.message}</span>
      )}
      <Button type="submit" disabled={isMutating}>Send</Button>
      {error && <div className="text-red-500">Something went wrong...</div>}
      {isMutating && <div className="text-green-200">Sending form data...</div>}
      {data && <div className="text-green-500">{data}</div>}
    </form>
  );
};

export default ContactFormPage;
