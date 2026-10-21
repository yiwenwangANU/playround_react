import { z } from "zod";

const schema = z
  .object({
    flightType: z.enum(["oneWay", "roundTrip"]),
    departureDate: z.iso.date("Departure date is required."),
    returnDate: z.iso.date().optional(),
  })
  .superRefine((val, ctx) => {
    if (val.flightType === "oneWay" && val.returnDate) {
      ctx.addIssue({
        code: "custom",
        message: "oneWay flight should not have returnDate",
        path: ["flightType"],
      });
      return;
    }
    if (val.flightType === "roundTrip" && !val.returnDate) {
      ctx.addIssue({
        code: "custom",
        message: "Round Trip flight needs return date.",
        path: ["returnDate"],
      });
      return;
    }
    if (val.returnDate && val.returnDate < val.departureDate) {
      ctx.addIssue({
        code: "custom",
        message: "Return date should no early than departure date.",
        path: ["returnDate"],
      });
    }
  });

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
