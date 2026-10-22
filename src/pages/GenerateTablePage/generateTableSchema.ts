import { z } from "zod";

const schema = z.object({
  rows: z.number().min(1),
  cols: z.number().min(1),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
