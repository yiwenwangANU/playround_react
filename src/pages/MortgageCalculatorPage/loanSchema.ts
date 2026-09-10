import { z } from "zod";

export const schema = z.object({
  loanAmount: z.number().int().min(0, "Loan Amount must no less than 0."),
  loanTerm: z.number().int().min(0, "Loan Term must no less than 0."),
  interestRate: z.number().int().min(0, "Loan Term must no less than 0."),
});

export type Schema = z.infer<typeof schema>;
