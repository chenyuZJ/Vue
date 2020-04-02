export default [
    {
        path: "/mydd",
        component: () => import("../views/mydd.vue")
    },
    {
        path: "/login",
        component: () => import("../components/login/login.vue"),
    },
    {
        path: "/register",
        component: () => import("../components/login/register.vue"),
    },

    {
        path: "/coupons",
        component: () => import("../components/my/coupons.vue"),
    },
    {
        path: "/address",
        component: () => import("../components/my/address.vue"),
    },
    {
        path: "/addressAdd",
        component: () => import("../components/my/addressAdd.vue"),
    },
    {
        path: "/addressEdit",
        component: () => import("../components/my/addressEdit.vue"),
    },
    {
        path: "/favorite",
        component: () => import("../components/my/favorite.vue"),
    },
    {
        path: "/myeva",
        component: () => import("../components/my/myeva.vue"),
    },
];