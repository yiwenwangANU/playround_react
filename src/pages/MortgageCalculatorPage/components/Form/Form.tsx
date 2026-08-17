import type { FC } from "react";
import InputField from "./components/InputField";

interface Props {
  onSubmit: () => void;
}

const Form: FC<Props> = ({ onSubmit }) => (
  <form onSubmit={onSubmit} className="grid grid-cols-[auto_1fr] gap-2">
    <InputField name="loanAmount" label="Loan Amount" />
    <InputField name="loanTerm" label="Loan Term (years)" />
    <InputField name="interestRate" label="Interest Rate (%)" />
    <button
      type="submit"
      className="rounded border border-gray-400 bg-gray-200 hover:cursor-pointer"
    >
      Calculate
    </button>
  </form>
);

export default Form;
