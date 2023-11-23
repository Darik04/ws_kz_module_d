import axios from 'axios';
import Contants from '../const';


class MindReaderService{


    recognize(image){
        const formData = new FormData();
        formData.append('image', image)
        return axios.post(Contants.API_URL+'/imagerecognition/recognize',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-API-TOKEN': localStorage.getItem(Contants.TOKEN_CONST)
            }
        })
        .then(response => {
            return response
        })
        
    }
}


export default new MindReaderService();