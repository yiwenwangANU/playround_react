import { useState, type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";
import Calculator from "./components/Calculator";

const schema = z.object({
  loanAmount: z
    .number("Please enter a postive number")
    .min(0, "Please enter a postive number"),
  loanTerm: z
    .number("Please enter a postive integer")
    .int("Please enter a postive integer")
    .min(0, "Please enter a postive integer"),
  interestRate: z
    .number("Please enter a postive number")
    .min(0, "Please enter a postive number"),
});

export type Schema = z.infer<typeof schema>;

const Test: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      loanAmount: 100000,
      loanTerm: 30,
      interestRate: 3,
    },
  });
  const [loanData, setLoanData] = useState<Schema | null>(null);

  const onSubmit = (data: Schema) => {
    setLoanData(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)} />
      {loanData && <Calculator {...loanData} />}
    </FormProvider>
  );
};

export default Test;
