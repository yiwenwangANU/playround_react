import { useState, type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "./components/Form";
import getMonthlyPayment from "./utils/getMonthlyPayment";
import Report from "./components/Report";

const schema = z.object({
  loanAmount: z.number("Invalid Loan Amount").min(0, "Invalid Loan Amount"),
  loanTerm: z.int("Invalid Loan Term").min(0, "Invalid Loan Term"),
  interestRate: z
    .number("Invalid Interest Rate")
    .min(0, "Invalid Interest Rate"),
});

export type Schema = z.infer<typeof schema>;

type PaymentData = {
  monthlyPayment: number;
  loanAmount: number;
  loanTerm: number;
};

const MortgageCalculatorPage: FC = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      loanAmount: 100000,
      loanTerm: 30,
      interestRate: 3,
    },
  });

  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  const onSubmit = (data: Schema) => {
    const payment = getMonthlyPayment(
      data.loanAmount,
      data.loanTerm,
      data.interestRate,
    );
    setPaymentData({
      loanAmount: data.loanAmount,
      monthlyPayment: payment,
      loanTerm: data.loanTerm,
    });
  };

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-120 space-y-4">
        <Form onSubmit={methods.handleSubmit(onSubmit)} />
        {paymentData && (
          <Report
            monthlyPaymentAmount={paymentData.monthlyPayment}
            loanAmount={paymentData.loanAmount}
            loanTerm={paymentData.loanTerm}
          />
        )}
      </div>
    </FormProvider>
  );
};

export default MortgageCalculatorPage;
