import { addTodo } from "@/store/useTodoStore";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  todo: z.string(),
});

const Form: FC = () => {
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });
  const handleOnSubmit = (data: z.infer<typeof schema>) => {
    addTodo(data.todo);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <input
        placeholder="Add your task"
        {...register("todo")}
        className="border border-black px-2 py-1"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
