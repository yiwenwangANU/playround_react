import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";

const schema = z.object({
  loanAmount: z.number().min(0, "Invalid Loan Amount"),
  loanTerm: z.int().min(0, "Invalid Loan Term"),
  interestRate: z.number().min(0, "Invalid Interest Rate"),
});

export type Schema = z.infer<typeof schema>;

const MortgageCalculatorPage: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      loanAmount: 10000,
      loanTerm: 30,
      interestRate: 3,
    },
  });

  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)} />
    </FormProvider>
  );
};

export default MortgageCalculatorPage;
