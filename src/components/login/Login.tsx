import React from "react";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { paths } from "@/utilities/paths";

const formSchema = z.object({
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Login: React.FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className=" container mt-10 flex justify-center items-center">
      <div className=" bg-white rounded-md lg:w-1/4 md:w-1/2 w-full p-5">
        <h1 className=" uppercase font-bold text-2xl text-center text-orange-300"> Sign In </h1>
        <hr className=" h-1 mt-3 mb-10"/>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col justify-between gap-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-slate-500">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-slate-500">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link to={paths.login} className=" text-right text-orange-500"> Forget Password?</Link>
            <Button className=" bg-slate-600" type="submit">Submit</Button>
            <p className=" text-slate-300 text-center">or</p>
            <p className=" text-center">Don't have any Account? <Link to={paths.register} className=" text-orange-500">Register</Link></p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
