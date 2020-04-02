export default [
    {
        path:"/cart",
        name:"购物车",
        component: () => import("../components/cart/cart.vue") 
    },
    {
        path:"/order",
        name:"订单",
        component: () => import("../components/cart/order.vue") 
    }
]