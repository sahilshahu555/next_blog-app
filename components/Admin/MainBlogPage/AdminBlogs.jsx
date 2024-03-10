
import Image from "next/image";
import { getBlogs } from "@/lib/actions/action";
import { deleteBlog } from "@/lib/actions/action";

const AdminBlogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="">
      <h1 className="text-3xl my-5 text-red-500 font-bold text-center md:text-left">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {blogs.map((blog) => (
        <div className="flex justify-between items-center rounded-xl gap-5 bg-slate-400 p-1 " key={blog.id}>
          
            <Image src={blog.img || "/noAvatar.png"} alt="blogs" className="w-14 h-14 rounded-xl" width={50} height={50}/>
            
            <span className="">{blog.title}</span>
            <form action={deleteBlog} className="">
                <input type="hidden" name="id" value={blog.id} />
                <button className="bg-red-500 px-3 py-1 text-sm rounded-xl w-24">Delete</button>
            </form>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AdminBlogs;