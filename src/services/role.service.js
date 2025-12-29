import { API_URLS } from "../constants/apiUrls"
import { apiRequest } from "../utils/apihelper"

const getAll = async()=>{

    const response =await apiRequest(API_URLS.ROLE);

    return response.data;
}

const create =async(data)=>{
    const response = await apiRequest(API_URLS.ROLE,{
        method:"POST",
        body:JSON.stringify(data)

    })
}

const update = async(id, data) =>{
    const response = await apiRequest(`${API_URLS.ROLE}/${id}`,{
        method:"PUT",
        body:JSON.stringify(data)
    });
}

const remove =async(id)=>{
    const response =await apiRequest(`${API_URLS.ROLE}/${id}`,{
        method:'DELETE'
    });

}

export const roleService ={
    getAll,
    create,
    update,
    remove
}