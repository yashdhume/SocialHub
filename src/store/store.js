import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        token: '',
        isLoggedIn: false,
        username: ''

    },
    mutations:{
        LoginSuccessful(state, token, username){
            state.isLoggedIn = true;
            state.token = token;
            state.username = username
        }
    },
    getters:{
        token: state => state.token,
        isLoggedIn: state => state.isLoggedIn,
        username: state => state.username
    },

});