import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import dict from './module/dict'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state,

    modules: {
        dict
    }
});

