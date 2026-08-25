import { useState, type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";
import Calculator from "./components/Calculator";

const schema = z.object({
  loanAmount: z.number().min(0, "Please enter a positive number."),
  loanTerm: z.number().int().min(0, "Please enter a positive integer."),
  interestRate: z.number().min(0, "Please enter a positive number."),
});

export type Schema = z.infer<typeof schema>;

const MortgageCalculatorPage: FC = () => {
  const [loan, setLoan] = useState<Schema | null>(null);
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      loanAmount: 100000,
      loanTerm: 30,
      interestRate: 3,
    },
  });

  const onSubmit = (data: Schema) => {
    setLoan(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-fit space-y-2">
        <Form onSubmit={methods.handleSubmit(onSubmit)} />
        <Calculator loan={loan} />
      </div>
    </FormProvider>
  );
};

export default MortgageCalculatorPage;
