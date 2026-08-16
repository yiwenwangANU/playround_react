import type { FC } from "react";
import InputField from "./components/InputField";
import StarRateField from "./components/StarRateField";
import { useFormContext, useWatch } from "react-hook-form";
import type { Schema } from "../../MortgageCalculatorPage";
import EmployedField from "./components/EmployedField";

interface Props {
  onSubmit: (data: Schema) => void;
}
const Form: FC<Props> = ({ onSubmit }) => {
  const { handleSubmit, control } = useFormContext<Schema>();
    const employmentStatus = useWatch({control, name: 'employed'})

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-120 grid-cols-[auto_1fr] gap-2 mx-auto"
    >
      <InputField name="loanAmount" label="Loan Amount" />
      <InputField name="loanTerm" label="Loan Term" />
      <InputField name="interestRate" label="Interest Rate" />
      <EmployedField />
      {employmentStatus === true &&  <InputField name='salary' label="Salary"/>}
      {employmentStatus === false &&  <InputField name='centlink' label="Centlink"/>}
      <StarRateField />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
