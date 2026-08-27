import type { FC } from "react";
import Field from "./components/Field";

interface Props {
  onSubmit: () => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  return (
    <form className="grid grid-cols-[auto_1fr] gap-2" onSubmit={onSubmit}>
      <Field name="rows" label="Rows" />
      <Field name="cols" label="Columns" />
      <button className="w-full cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5">
        Submit
      </button>
    </form>
  );
};

export default Form;
