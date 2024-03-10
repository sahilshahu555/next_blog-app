"use client";

import { addUser } from "@/lib/actions/action";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <div className="fixed top-[10rem] w-60 right-[5rem]">
      <h1 className="text-2xl text-center my-5 text-red-500 font-bold">Add New User</h1>
    <form action={formAction} className=" BlogForm flex flex-col gap-2 bg-slate-400 p-4 rounded-xl">
      <input type="text" name="username" placeholder="Enter username" required />
      <input type="text" name="email" placeholder="Enter email" required/>
      <input type="password" name="password" placeholder="Enter password" required/>
      <input type="text" name="img" placeholder="Enter image" />
      <select name="isAdmin" required>
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button className="bg-indigo-500 font-semibold active:scale-95 rounded-xl hover:bg-red-500 text-white active:text-black">Add</button>
      {state?.error}
    </form>
    </div>
  );
};

export default AdminUserForm;