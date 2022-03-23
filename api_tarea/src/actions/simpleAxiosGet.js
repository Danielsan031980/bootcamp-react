import axios from 'axios';


export async function simpleAxiosGet (url) {
    
    try{
        
        const apiResponse = axios.get(url).then(response=>response.json());
        return apiResponse

    }catch(error){
     
        return {error:"se ha producido un error:" + error}
    }

}

