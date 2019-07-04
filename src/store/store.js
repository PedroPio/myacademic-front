import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false 
    },
  
    getters: {

    },
    
    mutations: {
        login(state) {
            state.isLogged = true
        }
    },
    
    actions: {
        login(context) {
            context.commit('login')
        }
    }   
});