"use client";

import { login } from "@/lib/actions/action";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useState } from "react"

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);
  const [flag, setFlag] = useState(false);
  return (
    <form className="flex flex-col gap-3 w-72  " action={formAction}>
      <h1 className="text-3xl tracking-wider font-bold text-center text-red-500 my-2">Login Form</h1>
      <input type="text" placeholder="username" name="username" required/>
      <div className="flex items-center">
        <input type={`${flag?"password":"text"}`} placeholder="password" name="password" required />
        <span onClick={()=>setFlag(!flag)} className="cursor-pointer  absolute  right-[4rem] h-8 md:right-[32rem] -z-1">👁️‍🗨️</span>
      </div>
      
      <button className="bg-blue-500 px-3 py-1 rounded-xl active:scale-95 hover:bg-red-500">Login</button>
      {state?.error}
      
    </form>
  );
};

export default LoginForm;