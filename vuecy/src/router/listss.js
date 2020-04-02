export default {
    path:"/listss",
    component: () => import("../components/listsmain/listss.vue"),
    children:[
        {
            path:"listss/remai",
            redirect:"remai"
        },
        {
            path:"remai",
            component:() => import("../components/listsmain/remai.vue"),
        },
        {
            path:"cx",
            component:() => import("../components/listsmain/cx.vue"),
        },
        {
            path:"tsxs",
            component:() => import("../components/listsmain/tsxs.vue"),
        },
        {
            path:"tscx",
            component:() => import("../components/listsmain/tscx.vue"),
        },
        {
            path:"ss",
            component:() => import("../components/listsmain/ss.vue"),
        },
    ]
};