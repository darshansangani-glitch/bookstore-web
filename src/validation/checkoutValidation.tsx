import { z } from "zod";

export const checkoutSchema = z.object({
  cardNumber: z.string().regex(new RegExp(/^\d{13,19}$/), {
    message: "Must be a valid card number (13-19 digits)",
  }),
  holderName: z.string().min(1, { message: "Enter Card Holders Name!!" }),
  expiry: z
    .string()
    .regex(new RegExp(/\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/), {
      message: "Enter Valid Expiry Data",
    }),
  cvv: z
    .string()
    .regex(new RegExp(/^[0-9]{3,4}$/), {
      message: "Must be a 3 to 4-digit CVV number",
    })
    .min(1, { message: "Enter CVV!!" }),
});

export const upiIdValidation = z
  .string()
  .regex(new RegExp(/^[0-9A-Za-z.-]{2,256}@[A-Za-z]{2,64}$/), {
    message: "Enter Valid UPI Id!!",
  });
