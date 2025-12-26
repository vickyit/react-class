import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

    
export default function UserRole() {

      
      const {register, handleSubmit, setValue }= useForm();

    
     const [roles, setRoles]=useState([]);
     const [editId, setEditId]= useState(null); 

      const baseUrl="https://apistudent.codedonor.in/api/role"

    const roleList =async() =>{
       const response = await fetch(baseUrl);
        if(!response.ok)
        {
            console.log('fetch Error');   
        }
         const result = await response.json();
          console.log(result.data);
          
        setRoles(result.data);
        
         console.log(roles)
     }

     const addRole =async(data) =>{
       const response = await fetch(baseUrl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {name:data.name}
        )
       });
        if(!response.ok)
        {
            console.log('fetch Error');   
        }
         const result = await response.json();
          console.log(result.data);
          
       // setRoles(result.data);
        
         console.log(roles)
     }

     const UpdateRole =async(data) =>{
       const response = await fetch(`${baseUrl}/${editId}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(
            {name:data.name}
        )
       });
        if(!response.ok)
        {
            console.log('fetch Error');   
        }
         const result = await response.json();
          console.log(result.data);
          
       // setRoles(result.data);
        
         console.log(roles)
     }
     

      const deleteRole =async(id) =>{
       const response = await fetch(`${baseUrl}/${id}`,{
        method:"DELETE"

       });
        if(!response.ok)
        {
            console.log('Delete Error');   
        }
         const result = await response.json();
           roleList();   
      }
  
    useEffect(()=>{
         roleList();
          console.log(roles)
    },[])

    const handleDelete =async(id)=>{
        await deleteRole(id)
    }

    const handleEdit =async(data) =>{
        setValue("name", data.name);
        setEditId(data.id)
    }


    const onSubmit = async(data)=>{
        

       if(editId)
       {
        console.log(data);
         await UpdateRole(data)
         setEditId(null);
       }
       else
       {
      await addRole(data);
       }

        await roleList();
        //console.log(data)

    }

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} />
            <button>  
              {editId?<span>Update</span>:<span>Submit</span>}
               
              </button>
        </form>

       {roles.map(item =>(
         <div key={item.id}> {item.name}
           <button onClick={()=>handleEdit(item)}>Edit</button>
           <button onClick={()=>handleDelete(item.id)}>Delete</button>
           
          </div>
          
       ))} 
      
      </>
  )
}
