import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

// 存放固定的路由
const defaultRouterList: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/index.vue'),
    },
    {
        path: '/',
        name: '/',
        component: () => import('@/pages/layouts/index.vue'),
        children: [
            {
                path: '/',
                redirect: '/allChoose',
            },
            {
                path: '/allChoose',
                redirect: '/index',
            },
            {
                path: '/index',
                name: 'index',
                component: () => import('@/pages/allChoose/index.vue'),
            },
            {
                path: '/classDetail',
                name: 'classDetail',
                component: () => import('@/pages/classDetail/index.vue'),
            },
            {
                path: '/myChoose',
                name: 'myChoose',
                component: () => import('@/pages/myChoose/index.vue')
            },
            {
                path: '/professionalManagement',
                name: 'professionalManagement',
                component: () => import('@/pages/professionalManagement/index.vue'),
            },
            {
                path: '/curriculumManagement',
                name: 'curriculumManagement',
                component: () => import('@/pages/curriculumManagement/index.vue'),
            },
            {
                path: '/departmentManager',
                name: 'departmentManager',
                component: () => import('@/pages/departmentManager/index.vue'),
            },
            {
                path: '/studentsManager',
                name: 'studentsManager',
                component: () => import('@/pages/studentsManager/index.vue')
            },
            {
                path: '/teachersManager',
                name: 'teachersManager',
                component: () => import('@/pages/teachersManager/index.vue')
            }
        ]
    },

];

export const allRoutes = [...defaultRouterList];

const router = createRouter({
    history: createWebHistory(),
    routes: allRoutes
});

export default router;
