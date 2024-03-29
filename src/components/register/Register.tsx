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
import { paths } from "@/lib/paths";

const formSchema = z.object({
    email: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  number: z.string().min(11, {
    message: "Mobile Number must be at least 11 characters.",
  }),
  
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const Register:React.FC = () => {

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        number: "",
      password: ""
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }


  return (
    <div className=" container mt-5 flex justify-center items-center">
      <div className=" bg-white rounded-md lg:3/12 lg:w-4/12 md:w-5/12 w-full lg:p-10 p-5">
        <h1 className=" uppercase font-bold text-2xl text-center text-orange-300"> Sign Up </h1>
        <hr className=" h-1 mt-3 mb-10"/>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col justify-between gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-slate-500">Email</FormLabel>
                  <FormControl>
                    <Input autoComplete="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-slate-500">Mobile</FormLabel>
                  <FormControl>
                    <Input autoComplete="number" placeholder="Mobile" {...field} />
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
                    <Input autoComplete="current-password" type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className=" bg-slate-600" type="submit">Sign Up</Button>
            <p className=" text-slate-300 text-center">or</p>
            <p className=" text-center">Already have an account? <Link to={paths.auth.login} className=" text-orange-300">Sign In</Link></p>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Register