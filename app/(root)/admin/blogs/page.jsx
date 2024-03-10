import MainBlogPage from "@/components/Admin/MainBlogPage/MainBlogPage";
import Link from "next/link"

const AdminBlogs = () => {
  return (
   <div>

    <Link href="/admin/users" className="bg-red-500 font-semibold active:scale-95 rounded  hover:bg-indigo-500 text-white active:text-black px-3 py-1">Users Section</Link>

    <MainBlogPage/>
    </div>
  )
}

export default AdminBlogs