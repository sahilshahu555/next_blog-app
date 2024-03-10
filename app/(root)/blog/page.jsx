import BlogCard from '@/components/Blogs/BlogCard'
import React from 'react'
import {getBlogs} from "@/lib/actions/action"
import Link from "next/link"

const BlogsPage = async() => {
  const blogData= await getBlogs();
  return (
    <div>
      <div className="flex justify-end items-center "><Link href="/" className="bg-indigo-500 font-semibold active:scale-95 rounded-xl hover:bg-red-500 text-white active:text-black px-3 py-1">Creat Blog</Link></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10  " >
        {blogData?.map((blog,i)=>(
          <BlogCard blog={blog} key={i}/>
        ))}

      </div>
    </div>
  )
}

export default BlogsPage
