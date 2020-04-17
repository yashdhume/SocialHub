import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        token: '',
        isLoggedIn: false,
        username: '',
        data: '',

    },
    mutations:{
        LoginSuccessful(state, token, username){
            state.isLoggedIn = true;
            state.token = token;
            state.username = username
        },
        dataSend(state, data){
            state.data= data;
        }
    },
    getters:{
        token: state => state.token,
        isLoggedIn: state => state.isLoggedIn,
        username: state => state.username,
        data: state => state.data
    },

});