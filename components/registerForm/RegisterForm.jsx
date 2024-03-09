"use client";

import { register } from "@/lib/actions/action";
import { useFormState } from "react-dom";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
     
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);

     
  return (
    <form action={formAction} className="flex m-auto flex-col gap-3 w-72">
      <h1 className="text-3xl tracking-wider font-bold text-center text-red-500 my-2">SignUp Form</h1>
      <input type="text" placeholder="username" name="username" required/>
      <input type="email" placeholder="email" name="email" required />
      {/* <input type="password" placeholder="password" name="password"required /> */}
      <div className="flex items-center">
        <input type={`${flag?"password":"text"}`} placeholder="password" name="password" required />
        <span onClick={()=>setFlag(!flag)} className="cursor-pointer  absolute  right-[4rem] h-8 md:right-[32rem] -z-1">👁️‍🗨️</span>
      </div>
      {/* <input type="password" placeholder="password again" name="passwordRepeat"
      required/> */}
       <div className="flex items-center">
        <input type={`${flag1?"password":"text"}`} placeholder="password again" name="passwordRepeat" required />
        <span onClick={()=>setFlag1(!flag1)} className="cursor-pointer  absolute  right-[4rem] h-8 md:right-[32rem] -z-1">👁️‍🗨️</span>
      </div>
      <button className="bg-blue-500 px-3 py-1 rounded-xl active:scale-95 hover:bg-red-500">Register</button>
      {state?.error}
      <Link href="/login" className="text-black">
        Have an account? <b className="mx-2 text-red-500 ">Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;