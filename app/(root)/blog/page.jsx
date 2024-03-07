import BlogCard from '@/components/Blogs/BlogCard'
import React from 'react'

const BlogsPage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 " >
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>
     <BlogCard/>

    </div>
  )
}

export default BlogsPage
