"use client"

import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation";

const Links = () => {
    const pathName= usePathname();
    const navLinks=[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        },
    ]

//temp
    const session=true;
    const isAdmin=true;

  return (
    <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-center'>
      {navLinks.map((elm,i)=>(
        <Link key={i} href={elm.path} className={`${pathName === elm.path && "bg-white text-[#28144c]  "} py-1 px-3 rounded-2xl curser-pointer`}>
          {elm.title}
        </Link>
            ))}

      {session ?(
        <>
        {isAdmin && <Link href="/admin" className={`${pathName === "/admin" && "bg-white text-[#28144c]  "} py-1 px-3 rounded-2xl curser-pointer`}>Admin</Link>}
        <button className="py-1 px-3 bg-white text-[#28144c] rounded curser-pointer">Logout</button>
        </>
      ):(
        <div><Link href="/login" className="py-1  px-3 bg-white text-[#28144c] rounded curser-pointer">Login</Link></div>
      )}


    </div>
  )
}

export default Links

