import React from 'react'
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import AdminBlogs from './AdminBlogs';
import AdminBlogForm from './AdminBlogForm';


const MainBlogPage = async() => {
    const session = await auth();
  return (
    <div className="Blogs flex  items-center justify-between min-h-980 ">
       
        <div className="w-3/4  ">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminBlogs />
          </Suspense>
        </div>
        <div className="blogForm">
          <AdminBlogForm userId = {session.user.id} />
        </div>
      </div>
  )
}

export default MainBlogPage