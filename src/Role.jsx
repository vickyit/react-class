import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
 
export default function Role() {
 
  const baseUrl='https://apistudent.codedonor.in/api/role'

  const roleList = async ()=>{
     const response = await fetch(baseUrl);
     const result=   await response.json();
        setData(result.data);
       
  }

  const addRole = async(data)=>{
    const response = await fetch(baseUrl,{
     method:'POST',
     headers:{ "Content-Type":"application/json" },
     body: JSON.stringify(data)

    })

     await response.json();
  }

const UpdateRole = async(id,data)=>{
    const response = await fetch(`${baseUrl}/${id}`,{
     method:'PUT',
     headers:{ "Content-Type":"application/json" },
     body: JSON.stringify(data)

    })

     await response.json();
  }

  
const DeleteRole = async(id)=>{
    const response = await fetch(`${baseUrl}/${id}`,{
     method:'DELETE'
   })

     await response.json();
  }
  
  const [data, setData] =useState([]);
  const [editId, setEditId]= useState(null);
  
  const { register , handleSubmit ,setValue} =useForm()

   useEffect(  ()=>{
        roleList()

   },[] );

   const onSubmit = async (data)=>{
      
    if(editId)
    {
      await UpdateRole(editId, data);
       
      setEditId(null);
    }
    else 
    { 
      await addRole(data);
    }

      await roleList();
      
   }
   const onDelete =async (id)=>{
      await DeleteRole(id);
      await roleList();
   }

   const onEdit =async(data)=>{
    
      setValue("name", data.name);
       setEditId(data.id);

   }


  return (
    <div>
      
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register('name')} />
         <button>
           {editId?<span>Update</span>:<span>Submit</span>}
          
          </button>

        </form> 
      </div>
      <h1> Role List</h1>
       <table>
       <thead>
        <tr>
          <td>Name</td>
          <td>Action</td>
        </tr>
       </thead>
       <tbody>
        {data.map(item=>(
          <tr key={item.id}>
             <td> {item.name} </td>
             <td>
              <button onClick={()=>onEdit(item)}> Edit </button>
              <button onClick={()=>onDelete(item.id)} > Delete </button>
              
               </td>
          </tr>
        ))}

       </tbody>

       </table>

    </div>
  )
}
