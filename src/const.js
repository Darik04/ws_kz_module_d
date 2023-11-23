

class Constants{
    // API_URL = 'http://192.168.1.108/api';
    API_URL = 'http://127.0.0.1/api';

    TOKEN_CONST = 'token_storage';

    errorHandler(commit, statusCode){
        if(statusCode == 400){
            commit('setError', '400 Bad Request')
        }else if(statusCode == 401){
            commit('setError', '401 Unauthorized')
        }else if(statusCode == 403){
            commit('setError', '403 Forbidden')
        }else{
            commit('setError', '503 Service Unavailable')
        }
    }

}

export default new Constants()