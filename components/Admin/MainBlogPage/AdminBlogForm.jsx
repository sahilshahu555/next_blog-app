"use client"

import { addBlog } from "@/lib/actions/action";

import { useFormState } from "react-dom";

const AdminBlogForm = ({userId}) => {
  const [state, formAction] = useFormState(addBlog, undefined);
  
  return (
    <div className="fixed top-[10rem] w-60 right-[5rem]">
   <h1 className="text-2xl text-center my-5 text-red-500 font-bold">Add New Post</h1>
    <form action={formAction} className=" BlogForm flex flex-col gap-3 bg-slate-400 p-4 rounded-xl">
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Enter Title" required />
      <input type="text" name="slug" placeholder="Enter slug" required/>
      <input type="text" name="img" placeholder="Enter Image Link" required/>
      <textarea type="text" name="desc" rows={1} placeholder="Enter Description" required />
      <button className="bg-indigo-500 font-semibold active:scale-95 rounded-xl hover:bg-red-500 text-white active:text-black" >Add</button>
      {state?.error}
    </form>
    </div>
  );
};

export default AdminBlogForm;