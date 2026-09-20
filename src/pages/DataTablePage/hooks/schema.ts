import { z } from "zod";

export const schema = z.object({
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
