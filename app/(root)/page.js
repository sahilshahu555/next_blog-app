import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
   <div className="flex  flex-col md:flex-row gap-10 justify-around items-center"> 
        <div className="Image  ">
          <Image src="/hero.gif" alt="hero" width={400} height={400} className="rounded-2xl"/>
        </div>
        <div className="Content w-full md:w-1/2 flex flex-col gap-10"> 
           <h1 className="text-2xl md:text-4xl font-bold">Creative Blog Website</h1>
           <p>Managing your time while blogging might feel like a chore. But, there are some apps and websites designed for bloggers like you. </p>
           <div className="Buttons flex gap-10 text-black ">
             <Link href="/about"><button className=" bg-red-500 px-3 py-1 rounded hover:bg-white hover:scale-95">Learn More</button></Link>
             <Link href="/contact"><button className="bg-white px-3 py-1 rounded hover:bg-red-500 hover:scale-95">Contact</button></Link>
           </div>
           <div className="Image">
             <Image src="/brands.png" alt="brand" width={500} height={100}/>
           </div>
        </div>
        
   </div>

  );
}
