import React from 'react'
import RoleList from '../components/RoleList'
import useRole from '../hooks/roleHook'
import RoleForm from '../components/RoleForm';

export default function RolePage() {
    const {data ,create,update,remove, editing, setEditing} =useRole();
    
    const handleSubmit = async(fromData)=>{
    if(editing)
    {
        await update(editing.id, fromData);
        setEditing(null);
    }
    else 
    {
      await create(fromData);
    }

    }

 return (
    <>
     <RoleForm  onSubmit={handleSubmit} editing={editing}/>
     <h1>List</h1>
    <RoleList data={data} onDelete={remove} onEdit={setEditing} />
    </>
  )
}
