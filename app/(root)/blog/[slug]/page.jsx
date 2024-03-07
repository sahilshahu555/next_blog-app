import React from 'react'
import Image from "next/image"

const SingleBlogPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-start gap-10 p-3">
       <div className="md:px-10">
       <Image src="https://images.unsplash.com/photo-1709596046341-579b8918eb87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" className='object-cover  h-96 ' alt="image" width={500} height={500} />
       </div>
       <div className="flex flex-col  mt-2 gap-10 w-full md:w-1/2 ">
        <h1 className='text-3xl font-semibold'>Title</h1>
        <div className="flex justify-between items-center ">
           <Image src="/noavatar.png" className='object-cover rounded-full w-14 h-14 ' alt="image" width={500} height={500} />
           <div className="">
            <h1 className="text-gray-500 text-sm font-bold">Authore</h1>
            <p>Sahil Shahu</p>
           </div>
           <div className="">
            <h1 className="text-gray-500 text-sm font-bold">Published</h1>
            <p>11.08.2024</p>
           </div>
           
        </div>
        <p className='text-gray-400 text-sm pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       
      </div>

    </div>
  )
}

export default SingleBlogPage
