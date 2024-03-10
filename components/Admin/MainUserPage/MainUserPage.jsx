import { Suspense } from "react";
import AdminUsers from './AdminUsers';
import AdminUserForm from './AdminUserForm';


const MainUserPage = async() => {
    
  return (
    <div className="User flex flex-col-reverse md:flex-row  justify-between  min-h-80 px-5 ">
       
        <div className="w-full md:w-3/4  ">
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="UserForm">
          <AdminUserForm  />
        </div>
      </div>
  )
}

export default MainUserPage