export default [
    {
        path: "/orderlist",
        name: "订单列表",
        component: () => import("../views/orderlist.vue"),
        children: [
            {
                path: "orderAll",
                name: "全部订单",
                component: () => import("../components/orderlist/orderAll.vue")
            },
            {
                path: "orderPay",
                name: "未支付",
                component: () => import("../components/orderlist/orderPay.vue")
            },
            {
                path: "orderGoods",
                name: "待收货",
                component: () => import("../components/orderlist/orderGoods.vue")
            },
            {
                path: "orderEnd",
                name: "已完成",
                component: () => import("../components/orderlist/orderEnd.vue")
            },
        ]
    },
    {
        path: "/evaluation",
        name:"商品评价",
        component: () => import("../components/orderlist/evaluation.vue")
    }

]