import axios from 'axios';
import Contants from '../const';


class ChatterblastService{
    sendMessage(message, conID){
        if(conID){
            return axios.put(Contants.API_URL+'/chat/conversation/'+conID,{
                prompt: message
            },{
                headers: {
                    'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
                }
            })
            .then(response => {
                return response
            })
        }else{
            return axios.post(Contants.API_URL+'/chat/conversation',{
                prompt: message
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


    getMessage(conID){
        return axios.get(Contants.API_URL+'/chat/conversation/'+conID,{
            headers: {
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
        
    }
}


export default new ChatterblastService();