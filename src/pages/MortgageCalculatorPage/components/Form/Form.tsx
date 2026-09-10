import type { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import Field from "./components/Field";
import Button from "@/components/Button";
import { schema, type Schema } from "@/pages/MortgageCalculatorPage/loanSchema";

interface Props {
  onSubmit: (data: Schema) => void;
}

const Form: FC<Props> = ({ onSubmit }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      loanAmount: 100000,
      loanTerm: 30,
      interestRate: 3,
    },
  });

  const handleOnSubmit = (data: Schema) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleOnSubmit)}
        className="grid grid-cols-[auto_1fr] gap-2"
      >
        <Field name="loanAmount" label="Loan Amount" />
        <Field name="loanTerm" label="Loan Term" />
        <Field name="interestRate" label="Interest Rate" />
        <Button type="submit">Calculate</Button>
      </form>
    </FormProvider>
  );
};

export default Form;
