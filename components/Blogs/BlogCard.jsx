import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const BlogCard = () => {
  return (
    <div className=" w-full flex flex-col px-2 m-2 md:m-5 md:gap-5">
      <div className="flex ">
        <Image src="https://images.unsplash.com/photo-1709596046341-579b8918eb87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" className='object-cover rounded-xl w-32 md:w-52 h-52 md:h-60' alt="image" width={200} height={200} />
        <span className='-rotate-90 -ml-4 m-auto -z-10 text-xs font-semibold'>01.01.2024</span>
      </div>
      <div className="flex flex-col  mt-2">
        <h1>Title</h1>
        <p className='text-gray-400 text-sm'>Description</p>
        <Link href="/blog/123" className="text-indigo-400 text-xs underline">Read More...</Link>
      </div>

    </div>
  )
}

export default BlogCard