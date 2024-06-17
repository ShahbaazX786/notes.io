import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export const SignupFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, { message: "Email must be at least 2 characters." })
    .email()
    .max(50, { message: "Bruh!, you sure its a valid email!?" }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});
