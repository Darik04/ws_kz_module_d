// import AuthService  from "../services/auth.service";
import DreamWeaverService  from "../services/dreamweaver.service";
import Constants from '../const';
import router from '../router'

export const dreamweaver = {
    namespaced: true,
    state: {
        jobId: null,
        progress: 0,
        resourceId: null,
        imageUrl: null,
        isFinal: true,

        error: null
    },
    actions: {
        generateImage({ commit, dispatch, state }, text){
            commit('clearError')
            commit('setIsFinal', false)
            DreamWeaverService.generate(text)
            .then(
                response => {
                    commit('setJobId', response.data.job_id)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    // commit('setIsFinal', true)
                    // commit('setText', null)
                }
            )      
        },



        getStatus({ commit, dispatch, state }){
            commit('clearError')
            DreamWeaverService.getStatus(state.jobId)
            .then(
                response => {
                    commit('afterGetStatus', response.data)
                    if(response.data.progress >= 70){//Должно быть 100 конечно это для теста
                        dispatch('dreamweaver/getResult', {}, {root: true})
                    }
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    // commit('setIsFinal', true)
                    // commit('setText', null)
                }
            )      
        },




        getResult({ commit, dispatch, state }){
            commit('clearError')
            DreamWeaverService.getResult(state.jobId)
            .then(
                response => {
                    commit('afterGetResult', response.data)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    // commit('setIsFinal', true)
                    // commit('setText', null)
                }
            )      
        },


        upscale({ commit, dispatch, state }){
            commit('clearError')
            commit('setIsFinal', false)
            DreamWeaverService.upscale(state.resourceId)
            .then(
                response => {
                    commit('setJobId', response.data.job_id)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    // commit('setIsFinal', true)
                    // commit('setText', null)
                }
            )      
        },


        zoomIn({ commit, dispatch, state }){
            commit('clearError')
            commit('setIsFinal', false)
            DreamWeaverService.zoomIn(state.resourceId)
            .then(
                response => {
                    commit('setJobId', response.data.job_id)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    // commit('setIsFinal', true)
                    // commit('setText', null)
                }
            )      
        },



        zoomOut({ commit, dispatch, state }){
            commit('clearError')
            commit('setIsFinal', false)
            DreamWeaverService.zoomOut(state.resourceId)
            .then(
                response => {
                    commit('setJobId', response.data.job_id)
                },
                error => {
                    console.log(error.response)
                    if(error.response){
                        Constants.errorHandler(commit, error.response.status)
                        if(error.response.status == 401){
                            dispatch('auth/logout', null, { root: true });
                        }
                    }
                    // commit('setIsFinal', true)
                    // commit('setText', null)
                }
            )      
        },



        resetAll({ commit }){
            commit('resetAll')
        }
    },
    mutations: {
        setError(state, error){
            state.error = error;
        },
        clearError(state){
            state.error = null;
        },



        setJobId(state, data){
            state.jobId = data;
        },
        setIsFinal(state, data){
            state.isFinal = data;
            state.progress = 0;
        },



        afterGetStatus(state, data){
            state.progress = data.progress;
            state.imageUrl = data.image_url;
            if(data.progress >= 70){//Должно быть 100 конечно это для теста
                console.log('GENERATE END');
                state.isFinal = true;
            }
        },


        afterGetResult(state, data){
            state.imageUrl = data.image_url;
            state.resourceId = data.resource_id;
        },


        resetAll(state){
            state.jobId = null;
            state.resourceId = null;
            state.progress = 0;
            state.imageUrl = null;
            state.isFinal = true;
        }

    }
}