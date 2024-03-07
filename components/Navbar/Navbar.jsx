"use client"

import React,{useState} from 'react'
import Links from "./Links"
import Link from 'next/link'

const Navbar = () => {
  
   const[flag,setFlag]=useState(false)

  return (
    <div className='flex justify-around md:justify-between mb-10 gap-20 md:gap-0 sticky top-0 bg-[#281945] py-5 '>
        <div className="text-2xl font-bold">
           <Link href="/blog">Awesome<span className="text-red-500">Blogs</span></Link> 
        </div>
        <div className="Laptop hidden lg:flex">
            <Links/>
        </div>
        <div className="Mobile flex lg:hidden relative"> 
           <button className="text-center w-10"onClick={()=>setFlag(!flag)}>{!flag?"☰":"X"}</button>
           {flag && 
             <div className="absolute top-10 -left-[4rem] w-32 bg-red-500 rounded-2xl py-5 " onClick={()=>setFlag(!flag)}>
                <Links />
            </div> 
           }
        </div>

    </div>
  )
}

export default Navbar
