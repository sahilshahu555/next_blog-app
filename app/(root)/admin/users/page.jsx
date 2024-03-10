import MainUserPage from "@/components/Admin/MainUserPage/MainUserPage";
import Link from "next/link"

const AdminUsers = () => {
    return (
     <div>
         <Link href="/admin/blogs" className="bg-red-500 font-semibold active:scale-95 rounded  hover:bg-indigo-500 text-white active:text-black px-3 py-1">Blogs Section</Link>
        <MainUserPage/>
    </div>
    )
  }
  
  export default AdminUsers