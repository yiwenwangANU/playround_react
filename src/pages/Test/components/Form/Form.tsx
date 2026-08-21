import type { FC } from "react";
import InputField from "./components/InputField";
interface Props {
  onSubmit: () => void;
}
const Form: FC<Props> = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto grid w-100 grid-cols-[auto_1fr] gap-2"
    >
      <InputField name="loanAmount" label="Loan Amount" />
      <InputField name="loanTerm" label="Loan Term (years)" />
      <InputField name="interestRate" label="Interest Rate (%)" />
      <button
        type="submit"
        className="col-span-2 w-fit cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
      >
        Calculate
      </button>
    </form>
  );
};

export default Form;
