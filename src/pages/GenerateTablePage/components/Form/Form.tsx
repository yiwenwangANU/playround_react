import type { FC } from "react";
import Field from "./Field";

interface Props {
  onSubmit: () => void;
}
const Form: FC<Props> = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className="grid w-100 grid-cols-[auto_1fr] gap-2">
    <Field name="rows" label="Rows:" />
    <Field name="cols" label="columns:" />
    <button
      className="rounded border border-gray-400 bg-gray-200 px-2 py-0.5 hover:cursor-pointer"
      type="submit"
    >
      Submit
    </button>
  </form>
);

export default Form;
