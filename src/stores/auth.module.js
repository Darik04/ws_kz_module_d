import AuthService  from "../services/auth.service";

import router from './../router'


export const auth = {
    namespaced: true,
    state: {
        token: null
    },
    actions: {
        checkToken({ commit }, isTokenView){
            const tokenFrom = AuthService.getToken()
            if(tokenFrom){
                commit('setToken', tokenFrom);
                if(isTokenView){
                    router.push('/')
                }
            }else{
                if(!isTokenView){
                    router.push('/token')
                }
            }
        },
        setToken({ commit }, token){
            AuthService.setToken(token)
            router.push('/')
        },

        logout({ commit }, token){
            AuthService.clearToken(token)
            commit('clearToken');
            router.push('/token')
        }
    },
    mutations: {
        setToken(state, token){
            state.token = token;
        },

        clearToken(state){
            state.token = null;
        }
    }
}