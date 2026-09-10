import type { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import Field from "./components/Field";

const schema = z.object({
  loanAmount: z.number().int().min(0, "Loan Amount must no less than 0."),
  loanTerm: z.number().int().min(0, "Loan Term must no less than 0."),
  interestRate: z.number().int().min(0, "Loan Term must no less than 0."),
});

export type Schema = z.infer<typeof schema>;

interface Props {}

const Form: FC<Props> = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      loanAmount: 100000,
      loanTerm: 30,
      interestRate: 3,
    },
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Field name="loanAmount" label="Loan Amount" />
        <Field name="loanTerm" label="Loan Term" />
        <Field name="interestRate" label="Interest Rate" />
      </form>
    </FormProvider>
  );
};

export default Form;
