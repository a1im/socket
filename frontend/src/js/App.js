import 'babel-polyfill'
import Vue from 'vue'
import router from '@/router'
import mainComponent from '@/components/main.vue'
import io from './socket'
import models from './models'
import { store } from './store'

Vue.use(io);
Vue.use(models);

export const App = new Vue({
    el: "#app",

    components: { mainComponent },

    template: '<main-component />',

    router,

    store,

    created() {

    },
});
