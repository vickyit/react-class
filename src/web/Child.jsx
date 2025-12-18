import GrandChild from "./GrandChild";

export default function Child({value, values})
{
    return (
    <> 
     {value}

     {
      values.map((item, index)=>(
     <div key={index}> {item} </div>
      ))
     }
       
       
       {/* <GrandChild/> */}

     </>);
}