import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type Schema } from "@/pages/DiceRollerPage/dataRollerSchema";

interface Props {
  onSubmit: (data: Schema) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <label htmlFor="diceNum">
        Num of dice
      </label>
      <div className="flex gap-2">
        <input
          className="border border-black px-2 py-0.5"
          id="diceNum"
          type="number"
          {...register("diceNum", { valueAsNumber: true })}
        />
        <button className="w-fit cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5">
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
