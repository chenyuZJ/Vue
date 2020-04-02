export default {
    namespaced: true, //命名空间
    state: {
        lists: [
            {
                name: "张三",
                tel: "13099998888",
                province: "山西省",
                city: "晋中市",
                county: "和顺县",
                addressDetail: "1231231",
                address: "山西省晋中市和顺县1231231",
                areaCode: "140723",
                isDefault: true,
                id: 1,
            },
            {
                name: "李四",
                tel: "16548523645",
                province: "山西省",
                city: "晋中市",
                county: "和顺县",
                addressDetail: "1231231",
                address: "山西省晋中市和顺县1231231",
                areaCode: "140723",
                isDefault: true,
                id: 2,
            },
        ],
        defaultId: 1
    },
    mutations: {
        add(state, obj) {
            state.lists.forEach((item) => {
                item.isDefault = false;
            })
            obj.isDefault = true;
            obj.id = state.lists.length + 1;
            state.lists.push(obj); //添加地址
        },
        edit(state, { id, ...obj }) {
            obj.id = state.lists.length;
            state.lists[id] = obj;
        }
    },
    acttions: {},
    getters: {

    },
    modules: {}
}