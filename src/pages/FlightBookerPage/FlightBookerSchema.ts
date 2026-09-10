import { format, addDays } from "date-fns";
import { z } from "zod";

const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");

export const schema = z
  .object({
    flightType: z.enum(["oneWay", "roundTrip"]),
    departureDate: z.iso.date("Please provide departure date"),
    returnDate: z.iso.date().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.departureDate < tomorrow) {
      ctx.addIssue({
        code: "custom",
        path: ["flightType"],
        message: "Departure date should no early than tomorrow.",
      });
    }
    if (data.flightType === "roundTrip" && !data.returnDate) {
      ctx.addIssue({
        code: "custom",
        path: ["returnDate"],
        message: "Please provide return date.",
      });
    }
    if (data.returnDate && data.departureDate > data.returnDate) {
      ctx.addIssue({
        code: "custom",
        path: ["returnDate"],
        message: "Return date should no early than departure date.",
      });
    }
  });

export type Schema = z.infer<typeof schema>;
