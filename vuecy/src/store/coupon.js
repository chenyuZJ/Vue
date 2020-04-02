const coupon = {
    available: 1,
    condition: "无使用门槛\n最多优惠12元",
    reason: "",
    value: 200,
    name: "优惠券名称",
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: "2",
    unitDesc: "元"
};
const coupon2 = {
    available: 1,
    condition: "无使用门槛\n最多优惠12元",
    reason: "",
    value: 100,
    name: "优惠券名称",
    startAt: 1489104001,
    endAt: 1514592001,
    valueDesc: "1",
    unitDesc: "元"
};
export default {
    namespaced: true, //命名空间
    state: {
        coupons: [coupon, coupon2],
    },
    mutations: {

    },
    acttions: {},
    getters: {

    },
    modules: {}
}