import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        category: '',
        results: []
    },
    mutations: {
        SET_CATEGORY(state, value){
            state.category = value
        },
        setResults(state, results){
            state.results = results;
        }
    },
    actions: {
        setResults({commit}, results){
            commit('setResults', results);
        }
    }
})