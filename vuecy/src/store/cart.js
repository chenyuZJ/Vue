import Vue from 'vue';
import { Notify } from 'vant';
import { Toast } from 'vant';
Vue.use(Notify);
export default {
    namespaced: true, //命名空间
    state: {
        lists: [], //购物车数据
        lists2: [], //收藏数据
        num: 0,//商品数量
        num2:0,
        num3:0,
        num4:0,
    },
    mutations: {
        add(state, obj) {
            if (!localStorage.aa) {
                Notify('请登录');
            } else {
                let index = state.lists.findIndex(val => val.id == obj.id);
                if (index != "-1") {
                    // 存在数据，数量加一
                    state.lists[index].num += 1;
                    state.num = state.lists[index].num; //修改数量
                } else {
                    // 不存在数据，数据添加购物车
                    obj.isSelect = true; //默认选项
                    state.lists.push(obj);
                    state.num = 1; //修改数量
                }
                Toast('已加入购物车');
            }
        },
        buy(state,obj){
            obj.isSelect = true;
            state.lists.push(obj);
        },
        star(state,obj){
            state.lists2.push(obj);
            state.num2 += 1;
            Toast('已收藏');
        },
        // 删除数据
        del(state, index) {
            state.lists.splice(index, 1);
        },
        // 加法运算
        addition(state, index) {
            state.lists[index].num += 1;

        },
        // 减法运算
        subtraction(state, index) {
            state.lists[index].num = state.lists[index].num <= 1 ? 1 : state.lists[index].num - 1;
        }
    },
    acttions: {},
    getters: {
        sum(state) {
            // 总价格计算
            // reduce()返回计算总价格
            // total 总价格累加
            // item 数据中对象
            return state.lists.reduce((total, item) => {
                // 判断选项
                // if(!item.isSelect) return total; //false不让计算总价格
                return total + parseInt(item.price) * parseInt(item.num);//总价格
            }, 0);//总价格默认参数值为0
        }
    },
    modules: {}
}