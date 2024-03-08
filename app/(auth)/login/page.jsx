import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/actions/action";
import Link from "next/link"

const LoginPage = () => {

  return (
    
      <div className="h-72 mb-10 flex justify-center items-center flex-col gap-5">
        <LoginForm />
        <form action={handleGithubLogin} className="w-72">
          <button className="bg-red-500 w-full px-3 py-1 rounded-xl active:scale-95 hover:bg-blue-500">Login with Github</button>
        </form>
        <Link href="/register">
        {"Don't have an account?"} <b className="mx-2 text-red-500  ">Register</b>
        </Link>
      </div>
   
  );
};

export default LoginPage;