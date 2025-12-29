import React, { useEffect, useState } from 'react'
import { roleService } from '../services/role.service';
import { set } from 'zod';

export default function useRole() {
  const [data, setData] =useState([]);
  const [editing, setEditing] =useState(null)

 const load =async()=>{
    const response =await roleService.getAll();
 
    setData(response)
    
 }  
   useEffect(()=>{
      load();
   },[])

    const create = async(formData)=>{
         await  roleService.create(formData);
        await   load();
    }

    const remove =async(id)=>{
      await roleService.remove(id);
      await load();
    }

  return  {
    data,
    create,
    remove,
    editing,
    setEditing
  }
}
