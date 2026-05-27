import { Dispatch } from "react";
import { signupFormValidation } from "../validation/signupValidation";
import { z } from "zod";
import { SetStateAction, SubmitEvent } from "react";

export type SignUPFormData = z.infer<typeof signupFormValidation>;
export type SignUPFormErrors = Partial<Record<keyof SignUPFormData, string[]>>;

export interface SignupFormProps {
  handleSignUp: (e: SubmitEvent<HTMLFormElement>) => void;
  user: SignUPFormData;
  setUser: Dispatch<SetStateAction<SignUPFormData>>;
  error: SignUPFormErrors | string | null;
  loading: boolean;
}
