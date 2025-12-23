 import React from 'react'
import { useForm } from 'react-hook-form'
 
 export default function Register() {

   const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
   }= useForm();

  const password =watch('password');

  
  
  const onSubmit= async (data)=>{
     const response =await fetch("https://apistudent.codedonor.in/api/user/register",{
      method:"POST",
       headers:{
        "content-type":"application/json"
       },
       body:JSON.stringify(
          data
       )
     });
      const result = await response.json();
       console.log(result);
  }   

   return (
     <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input  {...register('firstName',{
          required:"FirstName is Required!",
          minLength:{
            value:4,
            message:'First Name must be greater then or equal 4 '
          },
          maxLength:{
            value:10,
            message:'First Name must be less then or equal to 10'
          }
        } )} />
         {errors.firstName && <span>{errors.firstName.message}</span> }
         <br/>

        <label> Last Name</label>
        <input  {...register('lastName')}  /> <br/>
        
        <label>Email</label>
        <input  {...register('email')}/> <br/>
        
        <label>Phone Number</label>
        <input  {...register('phoneNumber')} /> <br/>
        
        <label>Password</label>
        <input  {...register('password')}/> <br/>
        
        <label>Confirm Password</label>
        <input  {...register('confirmPassword',{
          validate:value =>value ==password ||'Password not match' 
        })}/>
        {errors.confirmPassword && <span> {errors.confirmPassword.message} </span>}
         <br/>
        <input type='Submit'/>
       </form>

     </div>

   )
 }
 