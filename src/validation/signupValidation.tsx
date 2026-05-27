import { z } from "zod";

export const signupFormValidation = z.object({
  name: z.string().min(3, { message: `Name Should be at least 3 Characters long` }),
  mobileNo: z.string().regex(new RegExp(/^[0-9]{10}$/), {
    message: `Phone number must have 10 digits.`,
  }),
  email: z
    .string()
    .regex(
      new RegExp(
        /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/,
      ),
      { message: "Enter Valid Email Address" },
    ),
  role: z.string(),
  password: z
    .string()
    .min(8)
    .regex(new RegExp(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/), {
      message: `Password is minimum at 8 characters long`,
    }),
});
