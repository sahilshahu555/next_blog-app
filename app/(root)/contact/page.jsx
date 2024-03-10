"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router= useRouter()

  const SubmitBtn=()=>{
    alert("Submited Successfully")
    router.push("/blog")
  }
  return (
    <div className=" flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0">
      <div className="image px-2 md:px-0">
       <Image src="/contact.png" alt="" width={400} height={400}/>
      </div>
      <div className="Form flex-1 ">
           <h1 className='text-center text-red-500 text-3xl font-semibold  my-5'>Contact Form</h1>
         <form action={SubmitBtn} className='flex flex-col gap-3 w-full lg:w-1/2 m-auto bg-slate-400 p-4 rounded-xl'>
           <input type="text" name="name" placeholder="Enter Full Name" required/>
           <input type="email" name="email" placeholder="Enter Email Address" required/>
           <input type="number" name="phone" placeholder="Enter Phone Number" required/>
           <textarea  name="message" rows={1} placeholder="Message" required/>
           <input type="submit" className="bg-indigo-500 font-semibold active:scale-95 rounded-xl hover:bg-red-500 text-white active:text-black" />
         </form>
      </div>

    </div>
  )
}

export default ContactPage