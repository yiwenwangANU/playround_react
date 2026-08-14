import type { FC } from "react";
import LoanAmount from "./components/LoanAmount";
import LoanTerm from "./components/LoanTerm";
import InterestRate from "./components/InterestRate";

interface Props {
  onSubmit: () => void;
}
const Form: FC<Props> = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto grid w-100 grid-cols-[auto_1fr] gap-4"
    >
      <LoanAmount />
      <LoanTerm />
      <InterestRate />
      <button
        className="py-0.5 w-fit cursor-pointer rounded border border-gray-400 bg-gray-200 px-2"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
