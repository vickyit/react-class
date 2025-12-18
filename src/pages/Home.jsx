import { useState } from "react";

export default function Home()
{

   //  const [count, setCount ] =   useState(1);
     const [user, setUser]= useState({name:'ram', age:40})
    
  const changeCount=()=>{

    
    //  count+1;
    //  count+1;
    //  count+1;
    //   setCount(count);
     
    //  setCount(count+5);
    //  setCount(count+2);
    //  setCount(count+3);
   
    // setCount( pre => pre+1)
    // setCount( pre => pre+1)
    // setCount( pre => pre+1)
    

     // console.log(count);
     
  }

    return <>
      <h1> {user.name} </h1>
      <h1> {user.age} </h1>
      

      <button onClick={changeCount}> inc Count </button>
         </>
}