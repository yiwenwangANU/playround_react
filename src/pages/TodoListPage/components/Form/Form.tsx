import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addTodo } from "../../store/useTodoStore";

const schema = z.object({
  todo: z.string(),
});

const Form: FC = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: z.infer<typeof schema>) => {
    if (data.todo === "") return;
    addTodo(data.todo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input
        className="rounded border border-gray-400 px-2 py-0.5"
        {...register("todo")}
      />
      <button className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5">
        Submit
      </button>
    </form>
  );
};

export default Form;
