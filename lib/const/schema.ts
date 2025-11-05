import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Email must be at least 2 characters." })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters." }),
});

export const SignupFormSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z
      .string()
      .email({ message: "Please enter a valid email address." })
      .max(50, { message: "Bruh!, you sure it's a valid email!?" }),
    confirmEmail: z.string().email({ message: "Please confirm your email." }),
    password: z
      .string()
      .min(2, { message: "Password must be at least 2 characters." }),
  })
  .refine((data) => data.email === data.confirmEmail, {
    path: ["confirmEmail"],
    message: "Email addresses do not match.",
  });
