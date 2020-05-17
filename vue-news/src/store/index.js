import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js'

Vue.use(Vuex);

// 상태관리 도구
export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.asks;
        }
    },
    mutations,
    actions,
    // getters,
    // mutations,
    // actions,
  })