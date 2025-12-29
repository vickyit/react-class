export const apiRequest =async (url,option={})=>{

    try
    {
    const response =await fetch(url, {
        headers:{
            "Content-Type":"application/json"
        }, 
        ...option
    });

    if(!response.ok)
    {
        throw new Error('api Fetch Error');
    }


     return await response.json();
    }
    
    catch
    {
        
        throw new Error('network error ');

    }


}