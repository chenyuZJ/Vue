<template>
    <div>
        <div class="tit">
            <p><i class="el-icon-success"></i>猜您的偏好,您可能喜欢</p>
        </div>
        <ul id="ull">
            <li id="wuxian" v-for="(item,index) in wulianlists" :key="index" @click="$router.push('./xq')">
                <img :src="item.imgs" alt="">
                <h3>{{item.h3}}</h3>
                <span>{{item.span}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                wulianlists:[
                    {imgs:require("../../assets/wuxian01.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian02.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian03.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian04.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian05.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian06.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian07.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian08.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian09.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian10.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian01.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian02.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian03.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian04.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian06.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian07.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian08.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian09.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                    {imgs:require("../../assets/wuxian10.jpg"),h3:"斗罗大陆4 终极斗罗16 唐家三少",span:"￥36"},
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
p{
    text-align: center;
    font-size: .46875rem;
    margin: .3125rem 0;
}
#ull{
    width: 100%;
}
#wuxian{
    height: 6.71875rem;
    width: 49%;
    padding-bottom: .25rem;
    float: left;
    &:nth-child(2n){
        margin-left: 2%;
    }
    img{
        width: 100%;
        height: 4.84375rem;
    }
    h3{
        margin-top: .125rem;
        padding: 0 .125rem;
        font-size: .3125rem;
        margin-bottom: 5px;
    }
    span{
        font-size: .46875rem;
        color: red;
    }
}
</style>