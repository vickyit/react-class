import { Link, Outlet } from "react-router-dom";

export default function User()
{
    return <>


    <Link to="/user/Profile">Profile</Link> <br/>
       <Link to="/user/change-password">Change Password</Link>
       
       <Outlet/>

      <h1> User </h1>
         </>
}