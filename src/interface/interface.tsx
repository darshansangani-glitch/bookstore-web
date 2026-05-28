import { Dispatch, SetStateAction, SubmitEvent } from "react";
import { loginFormValidation } from "../validation/loginValidation";
import { z } from "zod";

export type LoginFormData = z.infer<typeof loginFormValidation>;
export type LoginFormError = Partial<Record<keyof LoginFormData, string[]>>;

export interface LoginFormProps {
  handleLogin: (e: SubmitEvent<HTMLFormElement>) => void;
  setUser: Dispatch<SetStateAction<LoginFormData>>;
  user: LoginFormData;
  error: LoginFormError;
  loading: boolean;
}
