

import MainBlogPage from "@/components/Admin/MainBlogPage/MainBlogPage";
import MainUserPage from "@/components/Admin/MainUserPage/MainUserPage";
import Link from "next/link";

const AdminPage = async () => {

  

  return (
   
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-10 h-72">
        <Link href="/admin/blogs" className="bg-indigo-500 font-semibold active:scale-95 rounded-xl hover:bg-red-500 text-white active:text-black px-3 py-1">Blogs Section</Link>
        <Link href="/admin/users" className="bg-indigo-500 font-semibold active:scale-95 rounded-xl hover:bg-red-500 text-white active:text-black px-3 py-1">Users Section</Link>
      </div>

     
  );
};

export default AdminPage;