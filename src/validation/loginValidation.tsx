import { z } from "zod";

export const loginFormValidation = z.object({
  email: z
    .string()
    .regex(
      new RegExp(
        /^[a-zA-Z0-9]+([._-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+([.-][0-9a-zA-Z]+)*\.[a-zA-Z]{2,}$/,
      ),
      { message: "Enter Valid Email Address!!" },
    ),
  password: z
    .string()
    .regex(
      new RegExp(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      ),
      {
        message:
          "Enter Minimum eight characters, at least one letter, one number and one special character",
      },
    ),
});
