import React from 'react'
import RoleList from '../components/RoleList'
import useRole from '../hooks/roleHook'
import RoleForm from '../components/RoleForm';

export default function RolePage() {
    const {data ,create,remove, editing, setEditing} =useRole();
    
 return (
    <>
     <RoleForm  onSubmit={create} editing={editing}/>
     <h1>List</h1>
    <RoleList data={data} onDelete={remove} onEdit={setEditing} />
    </>
  )
}
