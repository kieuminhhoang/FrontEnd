require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter)


import TTBody from './components/tin_tucs/index/TTBody.vue';




const routes = [
    {
        path: '/',
        components: {
            ttBody: TTBody,
        }
    },
    
   
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')