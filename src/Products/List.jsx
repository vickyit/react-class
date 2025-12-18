import React from 'react'
import Item from './Item'

export default function List({items}) {
  return (<table style={{width:"600px"}}>
   <thead>
    <tr>
      <td> Name </td>
      <td> Price </td>
      <td> Category </td>
       
    </tr>
   </thead>
   <tbody>
  
  {items.map(({id, ...item})=>(

     <Item key={id}  {...item} />
  ))}


   </tbody>

  </table>

  )
}
