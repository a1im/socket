import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


import calcPage from '@/components/pages/calc.vue'
import websocketPage from '@/components/pages/websocket.vue'
import testPage from '@/components/pages/test.vue'


const router = new Router({
    routes: [
        {
            path: '/',
            name: 'calc',
            component: calcPage,
        },

        {
            path: '/websocket',
            name: 'websocket',
            component: websocketPage,
        },

        {
            path: '/test',
            name: 'test',
            component: testPage,
        },

        // {
        //     path: '*',
        //     component: errorPage,
        // }
    ],
});

export default router;
