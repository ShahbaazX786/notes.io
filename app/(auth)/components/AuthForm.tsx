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
import { loginUser, signUpUser } from "@/lib/api/auth";
import { LoginFormSchema, SignupFormSchema } from "@/lib/const/schema";
import { AuthModeProps } from "@/lib/const/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AuthForm = ({ mode }: AuthModeProps) => {
  const AuthSchema = mode === "login" ? LoginFormSchema : SignupFormSchema;
  const router = useRouter();

  const authForm = useForm<z.infer<typeof AuthSchema>>({
    resolver: zodResolver(AuthSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof AuthSchema>) =>
      mode === "login" ? loginUser(data) : signUpUser(data),
    onSuccess: (res) => {
      if (res?.success) {
        toast({
          title: `${
            mode === "login" ? "Logged in" : "Signed up"
          } successfully!`,
          variant: "default",
        });
        if (res?.access_token) {
          localStorage.setItem("token", res?.access_token);
          router.push("/dashboard");
        }
      } else {
        toast({
          title: "Error",
          description: res?.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    },
    onError: (err: any) => {
      toast({
        title: "Error",
        description: err.response?.data?.message || "Something went wrong.",
        variant: "destructive",
      });
    },
  });

  const onFormSubmit = (data: z.infer<typeof AuthSchema>) => {
    mutation.mutate(data);
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
