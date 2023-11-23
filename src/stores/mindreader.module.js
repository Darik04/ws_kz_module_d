// import AuthService  from "../services/auth.service";
import MindReaderService  from "../services/mindreader.service";
import Constants from '../const';
import router from '../router'

export const mindreader = {
    namespaced: true,
    state: {
        objects: [],
        loading: false,


        error: null
    },
    actions: {
        recognize({ commit, dispatch, state }, file){
            commit('clearError')
            commit('setLoading' ,true)
            MindReaderService.recognize(file)
            .then(
                response => {
                    console.log(response.data)
                    commit('afterRecognize', response.data.objects)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                }
            ).finally(() => {
                commit('setLoading', false)
            })
        },


        
    },
    mutations: {
        setError(state, error){
            state.error = error;
        },
        clearError(state){
            state.error = null;
        },

        
        afterRecognize(state, data){
            state.objects = data;
        },

        setLoading(state, loading){
            state.loading = loading
        },
    }
}