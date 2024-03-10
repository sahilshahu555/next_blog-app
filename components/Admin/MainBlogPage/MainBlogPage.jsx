import React from 'react'
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import AdminBlogs from './AdminBlogs';
import AdminBlogForm from './AdminBlogForm';


const MainBlogPage = async() => {
    const session = await auth();
  return (
    <div className="Blogs flex flex-col-reverse md:flex-row items-center justify-between min-h-980 px-5 ">
       
        <div className="w-full md:w-1/2 lg:w-3/4  ">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminBlogs />
          </Suspense>
        </div>
        <div className="blogForm w-full md:w-1/4">
          <AdminBlogForm userId = {session.user.id} />
        </div>
      </div>
  )
}

export default MainBlogPage