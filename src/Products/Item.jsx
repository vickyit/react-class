import React from 'react'

export default function Item({name, price, category}) {
  return (
     <tr>
      <td> {name} </td>
      <td> {price} </td>
      <td> {category} </td>
       
    </tr>
  )
}
