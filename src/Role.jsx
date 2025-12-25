import React, { useEffect, useState } from 'react'

export default function Role() {

    const [count, setCount]= useState(0);

    
    const [count1, setCount1]= useState(0);

    //every render
//  useEffect( ()=>{
//     console.log('useEffect')
//  } )

//one time on start
//   useEffect( ()=>{
//      console.log('use Effect!')
//   },[] )


// state 
useEffect(  ()=>{

     console.log('use Effecct');
     
},[count] )

  const handleClick =()=>{
    setCount(count+1);
 }

 const handleClick1 =()=>{
    setCount1(count1+1);
 }

  return (
  <>  {count} <br/>
   <button onClick={handleClick}> Count  </button><br/>

     {count}<br/>
   <button onClick={handleClick1}> Count 1 </button><br/>
   
</>
  )
}
