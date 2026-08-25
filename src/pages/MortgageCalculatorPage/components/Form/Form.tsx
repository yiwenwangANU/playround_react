import type { FC } from "react";
import Field from "./components/Field";

interface Props {
  onSubmit: () => void;
}
const Form: FC<Props> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="grid w-100 grid-cols-[auto_1fr] gap-2">
      <Field name="loanAmount" label="Loan Amount: " />
      <Field name="loanTerm" label="Loan Term: " />
      <Field name="interestRate" label="Interest Rate: " />
      <button className="w-fit cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5">
        Calculate
      </button>
    </form>
  );
};

export default Form;
