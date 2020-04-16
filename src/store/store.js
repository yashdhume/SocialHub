import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        token: '',
        isLoggedIn: false,

    },
    mutations:{
        LoginSuccessful(state, token){
            state.isLoggedIn = true;
            state.token = token;
        }
    },
    getters:{
        token: state => state.token,
    }
});