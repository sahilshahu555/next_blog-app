"use client"

import React,{useState} from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation";
import { handleLogout } from '@/lib/actions/action';
import { auth } from '@/lib/auth';


const Links = ({sessions}) => {

  
    const pathName= usePathname();
    const navLinks=[
        {
            title:"Home",
            path:"/"
        },
        {
          title:"Blogs",
          path:"/blog"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        
    ]

//temp
    // const session=false
    // const isAdmin=true;
   const[flag,setFlag]=useState(false)
      
  return (
    <div>
        <div className='Laptop hidden lg:flex  flex-col lg:flex-row gap-5 md:gap-10 items-center '>
          {navLinks.map((elm,i)=>(
            <Link key={i} href={elm.path} className={`${pathName === elm.path && "bg-white text-red-500 font-bold  "} py-1 px-3 rounded-2xl curser-pointer hover:scale-95`}>
              {elm.title}
            </Link>
                ))}

          {sessions?.user ?(
            <>
            {sessions?.user?.isAdmin && <Link href="/admin" className={`${pathName === "/admin" && "bg-white text-[#28144c]  "} py-1 px-3 rounded-2xl curser-pointer hover:scale-95`}>Admin</Link>}
            <form action={handleLogout}>
            <button className="py-1 px-3 bg-white text-[#28144c] rounded curser-pointer hover:scale-95">Logout</button>
            </form>
            </>
          ):(
            <div><Link href="/login" className="py-1  px-3 bg-white text-[#28144c] rounded curser-pointer hover:scale-95">Login</Link></div>
          )}

          
        </div>

        <div className="Mobile flex lg:hidden relative z-50"> 
            <button className="text-center w-10 bg-red-500 p-1 rounded-lg"onClick={()=>setFlag(!flag)}>{!flag?"☰":"X"}</button>
            {flag && 
            <div className="absolute flex flex-wrap z-10  items-center top-14 -right-1 w-[21rem] bg-red-500 rounded-2xl py-5 m-auto text-md gap-5 justify-around font-semibold" onClick={()=>setFlag(!flag)}>
                
            {navLinks.map((elm,i)=>(
              <Link key={i} href={elm.path} className={`${pathName === elm.path && "bg-white text-black font-bold  "} py-1 px-3 rounded-xl curser-pointer hover:scale-95`}>
                {elm.title}
              </Link>
                  ))}

            {sessions?.user?(
              <>
              {sessions?.user?.isAdmin && <Link href="/admin" className={`${pathName === "/admin" && "bg-white text-[#28144c]  "} py-1 px-3 rounded-2xl curser-pointer hover:scale-95`}>Admin</Link>}
              
                <button onClick={()=>handleLogout()} className="py-1 px-3 bg-white text-[#28144c] rounded curser-pointer hover:scale-95">Logout</button>
               
              </>
            ):(
              <div><Link href="/login" className="py-1 px-3 bg-white text-[#28144c] rounded curser-pointer hover:scale-95">Login</Link></div>
            )}

              </div> 
            }
        </div>
    </div>
  )
}

export default Links

