import React from 'react'

export default function RoleList({data, onDelete, onEdit}) {
  return (
    <table>
     <thead>
        <tr>
            <td>Name</td>
            <td>Action</td>
        </tr>
     </thead>
     <tbody>
        {data && data.map(item =>(
            <tr key={item.id}>
                <td> {item.name} </td>
                <td> <button onClick={()=>onEdit(item)} >Edit</button>
                     <button onClick={()=>onDelete(item.id)}>Delete</button>
                </td>
            </tr>
        ))}
     </tbody>
 
    </table>
  )
}
