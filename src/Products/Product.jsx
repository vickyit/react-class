import React, { useState } from 'react'
import List from './List';
import Search from './Search';

export default function Product() {
  
    const [searchKey,setSeachKey] =useState('');
     
    
    
    const products = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 800, category: "Electronics" },
  { id: 3, name: "Headphones", price: 150, category: "Accessories" },
  { id: 4, name: "Chair", price: 90, category: "Furniture" },
  { id: 5, name: "Desk", price: 250, category: "Furniture" },
  { id: 6, name: "Backpack", price: 60, category: "Accessories" },
  { id: 7, name: "Coffee Mug", price: 15, category: "Kitchen" }
];

const filterProduct = products.filter( item=>
   item.name.toLowerCase().includes(searchKey.toLowerCase())  
 )

 const handleChange =(e)=>{

    setSeachKey(e.target.value)
     console.log(searchKey)
     
 }

  
    return (
    <div>

   
     <Search handleChange={handleChange}/>  
     <List  items={filterProduct}/>

    </div>
  )
}
