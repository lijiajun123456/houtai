import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { state, mutations, getters } from './mutations';
import actions from './actions.js';


import menu from './modulus/menu';
import role from './modulus/role.js';
import manager from './modulus/manager.js';
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        menu,
        role,
        manager
    }
})