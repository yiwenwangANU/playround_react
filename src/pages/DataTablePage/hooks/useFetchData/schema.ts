import { z } from "zod";

const schema = z.object({
  users: z.array(
    z.object({
      id: z.number(),
      firstName: z.string(),
      lastName: z.string(),
      age: z.number(),
      company: z.object({
        title: z.string(),
      }),
    }),
  ),
  total: z.number(),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
