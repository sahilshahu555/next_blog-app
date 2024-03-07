import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-around items-center gap-20 md:gap-0">
      <div className='w-full  md:w-1/2 md:p-5 flex flex-col gap-5'> 
        <h2 className="text-md md:text-lg text-indigo-500 font-semibold">About Blogs</h2>
        <h1 className=" text-3xl md:text-4xl font-bold">We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className='text-gray-400 text-sm'>We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.</p>
        <div className='flex items-center justify-between gap-3'>
           <div>
             <h1 className="text-lg md:text-2xl font-bold text-indigo-500">10 K+</h1>
             <p className="text-[10px] md:text-xs">Years of experience</p>
           </div>
           <div>
             <h1 className="text-lg md:text-2xl font-bold text-indigo-500">234 K+</h1>
             <p className="text-[10px] md:text-xs">People reached</p>
           </div>
           <div>
             <h1 className="text-lg md:text-2xl font-bold text-indigo-500">5 K+</h1>
             <p className="text-[10px] md:text-xs">Services and plugins</p>
           </div>
        </div>
      </div>

      <div className="">
       <Image src="/about.png" className='' alt="about" width={400} height={400}/>
      </div> 
      
    </div>
  )
}

export default AboutPage