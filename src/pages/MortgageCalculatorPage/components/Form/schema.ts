import { z } from "zod";

const schema = z.object({
  loanAmount: z.number().min(1),
  loanTerm: z.number().int().min(1),
  interestRate: z.number().min(1),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
