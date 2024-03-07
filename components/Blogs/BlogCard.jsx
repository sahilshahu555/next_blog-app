import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const BlogCard = () => {
  return (
    <div className=" w-full flex flex-col px-10 m-2 md:m-5 lg:gap-3">
      <div className="flex ">
        <Image src="https://images.unsplash.com/photo-1709596046341-579b8918eb87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" className='object-cover  w-60 h-60 ' alt="image" width={200} height={200} />
        <span className='-rotate-90 -ml-2 m-auto -z-10 text-xs font-semibold'>01.01.2024</span>
      </div>
      <div className="flex flex-col  mt-2 gap-1">
        <h1 className='text-xl font-semibold'>Title</h1>
        <p className='text-gray-400 text-sm pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link href="/blog/123" className="text-indigo-400 text-xs underline">Read More...</Link>
      </div>

    </div>
  )
}

export default BlogCard