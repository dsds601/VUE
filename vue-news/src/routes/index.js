import Vue from 'vue'
import VueRouter from "vue-router";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path : '/',
            redirect: '/news',
        },
        {
            //url 주소
            path : '/news',
            // url 매핑 컴포넌트
            name: 'news',
            component : createListView('NewsView'),
        },
        {
            path : '/ask',
            name : 'ask',
            component : createListView('AskView'),
        },
        {
            path : '/jobs',
            name : 'jobs',
            component : createListView('JobsView'),
        },
        {
            path : '/user/:id',
            component : UserView,
        },
        {
            path : '/item/:id',
            component : ItemView,
        },
    ]
});

