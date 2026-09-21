import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  diceNum: z.coerce
    .number()
    .int("Please provide a number between 1 and 12")
    .min(1, "Please provide a number between 1 and 12")
    .max(12, "Please provide a number between 1 and 12"),
});

interface Props {
  onSubmit: (diceNum: number) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form
      className="space-y-2"
      onSubmit={handleSubmit((data) => onSubmit(data.diceNum))}
    >
      <label htmlFor="diceNum">Number of dice</label>
      <div>
        <input
          className="rounded border border-black px-2 py-0.5"
          id="diceNum"
          {...register("diceNum")}
        />
        <button className="ml-2 cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5">
          Roll
        </button>
      </div>
      {errors.diceNum && (
        <div className="text-rose-500">{errors.diceNum.message}</div>
      )}
    </form>
  );
};

export default Form;
