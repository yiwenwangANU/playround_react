import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useCreateContact from "./hooks/useCreateContact";

const schema = z.object({
  name: z.string(),
  email: z.email("lol"),
  message: z.string(),
});

export type Schema = z.infer<typeof schema>;

const Test: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const { data, trigger, isMutating } = useCreateContact();
  return (
    <form
      className="mx-auto flex w-fit flex-col gap-2"
      onSubmit={handleSubmit((data) => {
        trigger(data);
      })}
    >
      <label>Name</label>
      <input
        {...register("name")}
        className="border border-black px-1 py-0.5"
      />
      <label>Email</label>
      <input
        {...register("email")}
        className="border border-black px-1 py-0.5"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <label>Message</label>
      <textarea
        {...register("message")}
        className="border border-black px-1 py-0.5"
      />
      <button
        type="submit"
        disabled={isMutating}
        className="w-fit cursor-pointer rounded border border-gray-400 bg-gray-200 px-1.5 py-0.5"
      >
        Submit
      </button>
      {isMutating && <span>Sending form...</span>}
      {data && <span className="text-green-500">{data}</span>}
    </form>
  );
};

export default Test;
