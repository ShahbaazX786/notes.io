"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { LoginFormSchema, SignupFormSchema } from "@/lib/const/schema";
import { AuthModeProps } from "@/lib/const/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AuthForm = ({ mode }: AuthModeProps) => {
  const AuthFormSchema = mode === "login" ? LoginFormSchema : SignupFormSchema;

  const authForm = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues:
      mode === "login"
        ? { email: "", password: "" }
        : {
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: "",
            password: "",
          },
  });

  const onFormSubmit = (data: z.infer<typeof AuthFormSchema>) => {
    toast({
      title: `${mode === "login" ? "Login" : "Signup"} form Submitted!`,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="shadow-input mx-auto w-full h-auto overflow-y-auto min-w-96 max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        {mode === "login" ? "Welcome Back!" : "Welcome to Notes.io"}
      </h2>

      <Form {...authForm}>
        <form onSubmit={authForm.handleSubmit(onFormSubmit)}>
          {mode === "signup" && (
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <FormField
                control={authForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Shahrukh" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={authForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Khan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          <FormField
            control={authForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {mode === "signup" && (
            <FormField
              control={authForm.control}
              name="confirmEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm your email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={authForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white mt-6"
            type="submit"
          >
            {mode === "login" ? "Login" : "Create Account"}
            <BottomGradient />
          </Button>
        </form>
      </Form>

      <Link href={mode === "login" ? "/signup" : "/login"}>
        <p className="mt-2 hover:underline">
          {mode === "login"
            ? "Dont have an account?"
            : "Already have an account?"}
        </p>
      </Link>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export default AuthForm;
