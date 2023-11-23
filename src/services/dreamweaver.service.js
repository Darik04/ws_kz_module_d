import axios from 'axios';
import Contants from '../const';


class DreamWeaverService{
    generate(message){
        return axios.post(Contants.API_URL+'/imagegeneration/generate',{
            text_prompt: message
        },{
            headers: {
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
    }


    getStatus(jobId){
        return axios.get(Contants.API_URL+'/imagegeneration/status/'+jobId,{
            headers: {
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
    }

    
    getResult(jobId){
        return axios.get(Contants.API_URL+'/imagegeneration/result/'+jobId,{
            headers: {
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
    }



    upscale(resourceId){
        return axios.post(Contants.API_URL+'/imagegeneration/upscale',{
            resource_id: resourceId
        },{
            headers: {
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
    }



    zoomIn(resourceId){
        return axios.post(Contants.API_URL+'/imagegeneration/zoom/in',{
            resource_id: resourceId
        },{
            headers: {
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
    }


    zoomOut(resourceId){
        return axios.post(Contants.API_URL+'/imagegeneration/zoom/out',{
            resource_id: resourceId
        },{
            headers: {
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
    }
}   


export default new DreamWeaverService();