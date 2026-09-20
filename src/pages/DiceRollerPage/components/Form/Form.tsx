import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface Props {
  onSubmit: (diceNum: number) => void;
}

const schema = z.object({
  diceNum: z.coerce
    .number()
    .int("Please provide a positive integer between 1 and 12.")
    .min(1, "Please provide a positive integer between 1 and 12.")
    .max(12, "Please provide a positive integer between 1 and 12."),
});

type Schema = z.infer<typeof schema>;

const Form: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onHandleSubmit = (data: Schema) => {
    onSubmit(data.diceNum);
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <label htmlFor="diceNum">Number of dice</label>
      <div className="flex gap-2">
        <input
          id="diceNum"
          {...register("diceNum")}
          type="number"
          className="cursor-pointer rounded border border-gray-400 px-2 py-0.5"
        />
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
          type="submit"
        >
          Roll
        </button>
      </div>
      {errors.diceNum && <div className="text-rose-500">{errors.diceNum.message}</div>}
    </form>
  );
};

export default Form;
