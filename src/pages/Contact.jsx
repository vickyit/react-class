import { useParams } from "react-router-dom"

export default function Contact()
{
   const {name} =useParams();
    return <>
      <h1> Contact </h1>
      <h2>{name}</h2>
         </>
}