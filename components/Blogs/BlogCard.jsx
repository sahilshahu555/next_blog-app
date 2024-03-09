"use client"
import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const BlogCard = ({blog}) => {
  // console.log(blog)
  return (
    <div className=" w-full flex flex-col px-10 m-2 md:m-5 lg:gap-3 ">
      <div className="flex  w-80 ">
        <Image src={blog.img} className='object-cover  w-60 h-60 ' alt="image" width={200} height={200} />
        <span className='-rotate-90 m-auto -ml-4 -z-10 text-xs font-semibold'>{blog.createdAt.toString().slice(4,16)}</span>
      </div>
      <div className="flex flex-col  mt-2 gap-1">
        <h1 className='text-xl font-semibold'>{blog.title}</h1>
        <p className='text-gray-400 text-sm pr-10'>{blog.desc}</p>
        <Link href={`/blog/${blog.slug}`} className="text-indigo-400 text-xs underline">Read More...</Link>
      </div>

    </div>
  )
}

export default BlogCard