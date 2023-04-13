import Vue from 'vue';
import App from './index.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes';
import data from './store';
// import { debug, state, getters, actions, mutations } from './store';
console.log(data);
 const { state, getters, actions, mutations } = data;
console.log( state, getters);


Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations,  // 处理数据的唯一途径，state的改变或赋值只能在这里
  });
  console.log(store);

const router = new VueRouter({
    routes,
})

new Vue({
    router,
    store,
    data: { 
        namess: '章三'
    },
    render: h => h(App),
}).$mount('#app');