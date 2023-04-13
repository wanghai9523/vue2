import Vue from 'vue';
import App from './index.vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');