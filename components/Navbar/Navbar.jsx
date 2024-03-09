"use server"

import React from 'react'
import Links from "./Links"
import Link from 'next/link'
import { auth } from '@/lib/auth';

const Navbar = async() => {
  
   
   const sessions =await auth()
   // console.log(sessions)

  return (
    <div className='flex justify-around items-center md:justify-between mb-10 gap-20 md:gap-0 sticky top-0 bg-[#281945] py-5 border-b'>
        <div className="text-2xl font-bold">
           <Link href="/blog">Awesome<span className="text-red-500" >Blogs</span></Link > 
        </div>
        <div className="Links ">
            <Links sessions={sessions} />
        </div>
        {/* <div className="Mobile flex lg:hidden relative"> 
           <button className="text-center w-10"onClick={()=>setFlag(!flag)}>{!flag?"☰":"X"}</button>
           {flag && 
             <div className="absolute top-10 -left-[4rem] w-32 bg-red-500 rounded-2xl py-5 " onClick={()=>setFlag(!flag)}>
                <Links  />
            </div> 
           }
        </div> */}


    </div>
  )
}

export default Navbar
