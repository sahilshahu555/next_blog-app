"use client";

import { register } from "@/lib/actions/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form action={formAction} className="flex m-auto flex-col gap-3 w-72">
      <h1 className="text-3xl tracking-wider font-bold text-center text-red-500 my-2">SignUp Form</h1>
      <input type="text" placeholder="username" name="username" required/>
      <input type="email" placeholder="email" name="email" required />
      <input type="password" placeholder="password" name="password"required />
      <input type="password" placeholder="password again" name="passwordRepeat"
      required/>
      <button className="bg-blue-500 px-3 py-1 rounded-xl active:scale-95 hover:bg-red-500">Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b className="mx-2 text-red-500 ">Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;