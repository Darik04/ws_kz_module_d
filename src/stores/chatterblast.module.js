// import AuthService  from "../services/auth.service";
import ChatterblastService  from "../services/chatterblast.service";
import Constants from './../const';
import router from '../router'

export const chatterblast = {
    namespaced: true,
    state: {
        conversationId: null,
        text: null,
        answer: null,
        isFinal: true,


        error: null
    },
    actions: {
        sendMessage({ commit, dispatch, state }, text){
            commit('clearError')
            commit('setIsFinal', false)
            commit('setText', text)
            ChatterblastService.sendMessage(text, state.conversationId)
            .then(
                response => {
                    commit('afterSendMessage', response.data)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    commit('setIsFinal', true)
                    commit('setText', null)
                }
            )      
        },


        getAnswer({ commit, state }){
            console.log('GET ANSWER')
            commit('clearError')
            ChatterblastService.getMessage(state.conversationId)
            .then(
                response => {
                    commit('afterGetMessage', response.data)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    commit('setIsFinal', true)
                    commit('setText', null)
                }
            )      
        },



        resetConversation({commit}){
            commit('clearError')
            commit('resetConversation')
        }
    },
    mutations: {
        setError(state, error){
            state.error = error;
        },
        clearError(state){
            state.error = null;
        },


        setIsFinal(state, data){
            state.isFinal = data;
        },

        setText(state, text){
            state.text = text;
        },

        afterSendMessage(state, data){
            state.isFinal = false;//data.is_final;
            state.answer = state.response;
            state.conversationId = data.conversation_id;
        },

        afterGetMessage(state, data){
            state.answer = data.response;
            if(data.is_final == 1){
                state.isFinal = true
            }else{
                state.isFinal = data.is_final
            }
        },

        resetConversation(state){
            state.conversationId = null;
            state.text = null;
            state.answer = null;
            state.isFinal = true;
        }
    }
}