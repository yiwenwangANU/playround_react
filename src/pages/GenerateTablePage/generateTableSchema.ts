import { z } from "zod";

const positiveNumber = z
  .number("Please enter a positive number.")
  .int("Please enter a positive number.")
  .gt(0, "Please enter a positive number.");

export const schema = z.object({
  rows: positiveNumber,
  cols: positiveNumber,
});

export type Schema = z.infer<typeof schema>;
