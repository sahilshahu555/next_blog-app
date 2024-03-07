"use client"

import React,{useState} from 'react'
import Links from "./Links"

const Navbar = () => {
  
   const[flag,setFlag]=useState(false)

  return (
    <div className='flex justify-between mb-20 sticky top-0 bg-[#28144c] py-5'>
        <div className="text-2xl font-bold">
            Blogs
        </div>
        <div className="Laptop hidden md:flex">
            <Links/>
        </div>
        <div className="Mobile flex md:hidden relative"> 
           <button className="text-center"onClick={()=>setFlag(!flag)}>{!flag?"☰":"X"}</button>
           {flag && 
             <div className="absolute top-10 -left-[4rem] w-36 bg-red-500 rounded-2xl py-5 " onClick={()=>setFlag(!flag)}>
                <Links />
            </div> 
           }
        </div>

    </div>
  )
}

export default Navbar
