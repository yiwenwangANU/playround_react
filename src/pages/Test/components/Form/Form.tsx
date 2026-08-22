import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import type { Schema } from "../../Test";

interface Props {
  onSubmit: () => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto grid w-100 grid-cols-[auto_1fr] gap-2"
    >
      <label htmlFor="rows">Rows</label>
      <input
        id="rows"
        {...register("rows", { valueAsNumber: true })}
        type="number"
      />
      {errors.rows && (
        <span className="col-span-2 text-red-500">{errors.rows.message}</span>
      )}
      <label htmlFor="cols">Cols</label>
      <input
        id="cols"
        {...register("cols", { valueAsNumber: true })}
        type="number"
      />
      {errors.cols && (
        <span className="col-span-2 text-red-500">{errors.cols.message}</span>
      )}
      <button
        type="submit"
        className="col-span-2 cursor-pointer rounded border border-gray-400 bg-gray-200 px-1 py-0.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
