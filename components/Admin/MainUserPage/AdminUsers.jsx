
import Image from "next/image";
import { getUsers } from "@/lib/actions/action";
import { deleteUser } from "@/lib/actions/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className="">
      <h1 className="text-3xl my-5 text-red-500 font-bold">Users</h1>
      <div className="grid grid-cols-2 gap-5">
      {users.map((user) => (
        <div className="flex items-center justify-between rounded-xl gap-5 bg-slate-400 p-1 " key={user.id}>
          
            <Image src={user?.image || "/noAvatar.png"} alt="blogs" className="w-14 h-14 rounded-xl" width={50} height={50}/>
            
            <span className="">{user.username}</span>
            <form action={deleteUser} className="">
                <input type="hidden" name="id" value={user.id} />
                <button className="bg-red-500 px-3 py-1 text-sm rounded-xl w-24">Delete</button>
            </form>
        </div>
      ))}
      </div>
    </div>
  );
};

export default AdminUsers;