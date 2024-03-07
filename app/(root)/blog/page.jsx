import BlogCard from '@/components/Blogs/BlogCard'
import React from 'react'

const BlogsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10  " >
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
