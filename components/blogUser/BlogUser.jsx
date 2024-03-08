import React from 'react'
import Image from "next/image"
import {getUser} from "@/lib/actions/action"
const BlogUser = async({userId}) => {
  const user = await getUser(userId);
  console.log(user)
  return (
    <div className='flex items-center gap-10  md:gap-20'>
        <Image  src={user.img ? user.img : "/noavatar.png"} className='object-cover rounded-full w-14 h-14 ' alt="image" width={500} height={500} />
           <div className="">
            <h1 className="text-gray-500 text-sm font-bold">Authore</h1>
            <p>{user.username}</p>
           </div>
    </div>
  )
}

export default BlogUser