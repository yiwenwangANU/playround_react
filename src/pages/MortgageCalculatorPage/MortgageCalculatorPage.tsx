import type { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";

const schema = z.object({
  loanAmount: z.number().min(0, "Invalid Loan amount"),
  loanTerm: z.int().min(0, "Invalid Loan Term"),
  interestRate: z.number().min(0, "Invalid Interest Rate"),
  starRate: z.int().min(0).max(5),
  employed: z.boolean("Invalid Employed"),
  salary: z.number().min(0, "Invalid Salary").optional(),
  centlink: z.number().min(0, "Invalid Centlink").optional(),
});

export type Schema = z.infer<typeof schema>;

const MortgageCalculatorPage: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    shouldUnregister: true,
    defaultValues: {
      loanAmount: 100000,
      loanTerm: 30,
      interestRate: 3,
      starRate: 0,
      employed: true,
      salary: 0,
      centlink: 0
    },
  });
  const handleSubmit = (data: Schema) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit} />
    </FormProvider>
  );
};

export default MortgageCalculatorPage;
