 import React from 'react'
import { useForm } from 'react-hook-form'
 
import { string, z } from 'zod';  
 import { zodResolver } from '@hookform/resolvers/zod';  

 const registerSchema =z.object(
  {
   firstName: string().nonempty('zod name Required')
    .min(4,'zod min 4')
    .max(6,'max 6 zod') 
  }
 )

 
 //npm install yup @hookform/resolvers 
// import * as yup from 'yup';   
//  import { yupResolver } from '@hookform/resolvers/yup';  

//  const registerSchema = yup.object().shape(
//   {
//     firstName:yup.string().required('yup firstName required')
//     .min(4,'yup 4')
//     .max(6,'yup max 6'),
//      lastName:yup.string().required('last name is requried')     

//   }
//  )

    //resolver:yupResolver(registerSchema),

    //zod




 export default function Register() {

   const {
    register,
    handleSubmit,
   // watch,
    formState:{errors, isSubmitting}
   }= useForm({
    //resolver:yupResolver(registerSchema),
    resolver:zodResolver(registerSchema),
    mode:'onBlur'
   });

  //const password =watch('password');

  
  
  const onSubmit=   async(data)=>{
 
      const response = new Promise((resolve)=>{
       setTimeout(() => {
        resolve();
       console.log(data);
       }, 2000);
      });

      //response.then(()=>console.log('Hello'));
      await response;
 

    //  const response =await fetch("https://apistudent.codedonor.in/api/user/register",{
    //   method:"POST",
    //    headers:{
    //     "content-type":"application/json"
    //    },
    //    body:JSON.stringify(
    //       data
    //    )
    //  });
    //   const result = await response.json();
    //    console.log(result);
  }   

   return (
     <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input  {...register('firstName',
        // {
        //   required:"FirstName is Required!",
        //   minLength:{
        //     value:4,
        //     message:'First Name must be greater then or equal 4 '
        //   },
        //   maxLength:{
        //     value:10,
        //     message:'First Name must be less then or equal to 10'
        //   }
        // } 
        
        )} />
         {errors.firstName && <span>{errors.firstName.message}</span> }
         <br/>

        <label> Last Name</label>
        <input  {...register('lastName')}  /> 
           {errors.lastName && <span>{errors.lastName.message}</span> }
      <br/>

        <label>Email</label>
        <input  {...register('email')}/> <br/>
        
        <label>Phone Number</label>
        <input  {...register('phoneNumber')} /> <br/>
        
        <label>Password</label>
        <input  {...register('password')}/> <br/>
        
        <label>Confirm Password</label>
        <input  {...register('confirmPassword',
        // {
        //   validate:value =>value ==password ||'Password not match' 
        // }
         )}/>
        {errors.confirmPassword && <span> {errors.confirmPassword.message} </span>}
         <br/>
        {/* <input type='Submit' disabled={isSubmitting}
         value={isSubmitting?"Submitting":"Submit"} />
          */}
          <button disabled={isSubmitting}> {isSubmitting?"submitting":"Submit" } </button>
       </form>

     </div>

   )
 }
 