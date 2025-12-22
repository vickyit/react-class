import React, { useState } from 'react'

export default function User() {

    // const [name,setName]= useState("");

     const [user, setUser] = useState({
        name:"",
        age:""
     })
      
     const [error, setError]= useState({});

     const validation =()=>{
        if(user.name == "")
        {
            setError( error =>( {...error, name:'name is required '}))
            return false
        }
        if(user.age == "")
        {
            setError(error =>( {...error, age:'age is required '}))
            return false
        }
        

        return true

     }

      const handleNameBlur=(e)=>{
       
        if(user.name == "")
        {
            setError( error =>( {...error, name:'name is required '}))
            return false
        }
      }

     const handleChange=(e)=>{
        setUser( {...user, [e.target.name] :e.target.value});
        //console.log(user);
    
     }
     const handleSubmit =(e)=>{
          e.preventDefault();

          if(!validation())
          {
           return
          }

          console.log(user);
     } 

    // const handleNameChange=(e)=>{
    //     // setName(e.target.value);
    //     // console.log(name);
    //     setUser( {...user, name:e.target.value});
    //     console.log(user);

    // }

    return (
    <div>User

    <form onSubmit={handleSubmit}>
         
         Name : <br/>
        <input name='name' onChange={handleChange} onBlur={handleNameBlur} /><br/>
        {error.name && <div>{error.name}</div> }

        age : <br/>
        <input name='age' onChange={handleChange} /><br/>
        {error.age && <div>{error.age}</div> }<br/><br/>
        
        <button> Submit</button>
    </form>

    </div>
  )
}
