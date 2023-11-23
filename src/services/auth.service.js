import Contants from './../const';


class AuthService{
    setToken(token){
        localStorage.setItem(Contants.TOKEN_CONST, token);
        return;
    }
    clearToken(){
        localStorage.clear(Contants.TOKEN_CONST);
        return;
    }
    getToken(){
        console.log(localStorage.getItem(Contants.TOKEN_CONST))
        return localStorage.getItem(Contants.TOKEN_CONST);
    }
}


export default new AuthService();