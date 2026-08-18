import { useState, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import DicePanel from "./compnents/DicePanel";

const schema = z.object({
  diceNum: z
    .number("Please enter a number")
    .int("Please select a valid Integer,")
    .min(1, "Please enter a number no less than 1")
    .max(12, "Please enter a number no larger than 12"),
});

const DiceRollerPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [diceNum, setDiceNum] = useState<number>(0);

  return (
    <div className="mx-auto w-fit">
      <form
        className="my-5 grid grid-cols-[auto_1fr] gap-2 p-2"
        onSubmit={handleSubmit((data) => {
          setDiceNum(data.diceNum);
        })}
      >
        <div className="col-span-2">Number of Dices</div>
        <input
          className="border border-black px-1 py-0.5"
          {...register("diceNum", { valueAsNumber: true })}
          type="number"
        />
        <button
          type="submit"
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
        >
          Roll
        </button>
        {errors.diceNum && (
          <span className="col-span-2 px-2 text-red-500">
            {errors.diceNum.message}
          </span>
        )}
      </form>
      {diceNum > 0 && <DicePanel diceNum={diceNum} />}
    </div>
  );
};

export default DiceRollerPage;
