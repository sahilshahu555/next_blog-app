import React from 'react'
import { Suspense } from "react";
import Image from "next/image"
import BlogUser from '@/components/blogUser/BlogUser'
import {getBlog} from "@/lib/actions/action"

const SingleBlogPage = async({ params }) => {
  const { slug } = params;
  const singleBlog= await getBlog(slug);
  // console.log(singleBlog)

  return (
    <div className="flex flex-col md:flex-row justify-around items-start gap-10 p-3">
       <div className="md:px-10">
       <Image src={singleBlog.img} className='object-cover  h-96 ' alt="image" width={500} height={500} />
       </div>
       <div className="flex flex-col  mt-2 gap-10 w-full md:w-1/2 ">
        <h1 className='text-3xl font-semibold'>{singleBlog.title}</h1>
        <div className="flex  items-center gap-10 md:gap-20">
          
           {singleBlog && (
            <Suspense fallback={<div>Loading...</div>}>
               <BlogUser userId={singleBlog.userId} />
            </Suspense>
          )}
           <div className="">
            <h1 className="text-gray-500 text-sm font-bold">Published</h1>
            <p>{singleBlog.createdAt.toString().slice(4,16)}</p>
           </div>
           
        </div>
        <p className='text-gray-400 text-sm pr-10'>{singleBlog.desc}</p>
       
      </div>

    </div>
  )
}

export default SingleBlogPage
