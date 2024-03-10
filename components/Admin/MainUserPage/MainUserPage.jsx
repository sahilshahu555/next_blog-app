import { Suspense } from "react";
import AdminUsers from './AdminUsers';
import AdminUserForm from './AdminUserForm';


const MainUserPage = async() => {
    
  return (
    <div className="User flex   justify-between  min-h-80 ">
       
        <div className="w-3/4  ">
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