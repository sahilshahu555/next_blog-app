import BlogCard from '@/components/Blogs/BlogCard'
import React from 'react'
import {getBlogs} from "@/lib/actions/action"

const BlogsPage = async() => {
  const blogData= await getBlogs();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10  " >
      {blogData?.map((blog,i)=>(
        <BlogCard blog={blog} key={i}/>
      ))}

    </div>
  )
}

export default BlogsPage
