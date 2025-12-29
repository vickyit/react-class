import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function RoleForm({onSubmit ,editing}) {

    const{register, handleSubmit, reset} =useForm();

    useEffect(()=>{
        if(editing)
        {
            reset(editing);
        }

    },[editing, reset])
  return (
    <form  onSubmit={handleSubmit(onSubmit)} >
        <input  {...register('name')}></input>
        <button>
            
            {editing ?<span>Update</span> :<span>Submit</span>}
        </button>
    </form>
  )
}
