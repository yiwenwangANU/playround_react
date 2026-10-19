import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type Schema } from "../../schema";
import Field from "./components/Field";

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
  const handleSubmit = (data: Schema) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className="w-100 space-y-2"
      >
        <Field name="loanAmount" label="Loan Amount" />
        <Field name="loanTerm" label="Loan Term" />
        <Field name="interestRate" label="Interest Rate" />
        <button className="ml-auto block w-fit cursor-pointer rounded bg-black px-2 py-0.5 text-white">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
