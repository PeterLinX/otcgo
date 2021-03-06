import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.css';
import 'element-ui/lib/theme-default/index.css';


import ElementUI from 'element-ui'

import { routes } from './config/routers'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const router = new VueRouter({ routes })

Vue.http.options.root = '/api/v1'
Vue.http.options.emulateJSON = true

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
