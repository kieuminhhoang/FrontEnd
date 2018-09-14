require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter)


import TTHeader from './components/tin_tucs/index/TTHeader.vue';
import TTMenu from './components/tin_tucs/index/TTMenu.vue';
import TTBody from './components/tin_tucs/index/TTBody.vue';
import TTFooter from './components/tin_tucs/index/TTFooter.vue';




const routes = [
    {
        path: '/',
        components: {
            // ttMenu: TTMenu,
            ttBody: TTBody,
            ttFooter: TTFooter
        }
    },
    
   
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')