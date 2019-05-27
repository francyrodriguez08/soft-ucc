import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        category: ''
    },
    mutations: {
        SET_CATEGORY(state, value){
            state.category = value
        }
    },
    actions: {

    }
})