import React from 'react'
import Link from "next/link"
const Footer = () => {
  return (
    <div className='flex justify-between border-t p-5 my-5'>
       <Link href="/blog">Awesome<span className="text-red-500">Blogs</span></Link>
      <p>Creative  blogs website</p>
    </div>
  )
}

export default Footer
