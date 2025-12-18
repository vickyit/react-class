import { Link } from "react-router-dom";

export default function Menu()
{
    return <>
       <Link to="/">Home</Link> <br/>
       <Link to="/about">About</Link><br/>
       <Link to="/contact">Contact</Link><br/>
       <Link to="/user">User</Link>

       
       
    </>
}