import { z } from "zod";

const schema = z.object({
  diceNum: z
    .number("Please enter a integer between 1 and 12.")
    .int("Please enter a integer between 1 and 12.")
    .min(1, "Please enter a number between 1 and 12.")
    .max(12, "Please enter a number between 1 and 12."),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
