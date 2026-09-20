import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addTodo } from "@/store/useTodoStore";

const schema = z.object({
  todo: z.string(),
});

const Form: FC = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onHandleSubmit = (data: z.infer<typeof schema>) => {
    addTodo(data.todo);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)} className="flex gap-2">
      <input
        placeholder="Add your task"
        className="border border-black px-2 py-0.5"
        {...register("todo")}
      />
      <button
        className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
