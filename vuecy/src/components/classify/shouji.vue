<template>
  <div>
    <div class="main">
      <img src="../../assets/tongshu.jpg" alt class="imgtit" />
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="meirong">
              <span class="meirong1">进入当当书城</span>
              <span class="meirong2">特价低于1.9折</span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <div class="meirong">
              <span class="meirong1">进入童书馆</span>
              <span class="meirong2">精选少儿读物</span>
            </div>
          </div>
        </el-col>
      </el-row>

      <!-- 榜单 -->
      <div class="bangdan">
        <h3>榜单</h3>
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <!-- <van-image src="../../assets/bangdan01.png" /> -->
            <img src="../../assets/bangdan01.png" alt />
            <p>总榜</p>
          </van-grid-item>
          <van-grid-item>
            <!-- <van-image src="../../assets/bangdan02.png" /> -->
            <img src="../../assets/bangdan02.png" alt />
            <p>新书榜</p>
          </van-grid-item>
          <van-grid-item>
            <!-- <van-image src="../../assets/bangdan03.png" /> -->
            <img src="../../assets/bangdan03.png" alt />
            <p>童书榜</p>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- 小说 -->
      <div class="xiaoshuo" v-for="(item,index) in lists" :key="index">
        <div class="xiaoshuotit clear">
          <h3>{{item.h3}}</h3>
          <h4>{{item.h4}}</h4>
        </div>
        <div class="xiaoshuomain">
          <van-row type="flex" justify="center">
            <van-col span="6">{{item.t1}}</van-col>
            <van-col span="6">{{item.t2}}</van-col>
            <van-col span="6">{{item.t3}}</van-col>
          </van-row>
          <van-row type="flex" justify="center">
            <van-col span="6">{{item.t4}}</van-col>
            <van-col span="6">{{item.t5}}</van-col>
            <van-col span="6">
              展开
              <i class="el-icon-arrow-down"></i>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          h3: "小说>",
          h4: "畅销榜>",
          t1: "社会",
          t2: "侦探/悬疑",
          t3: "情感",
          t4: "世界名著",
          t5: "历史"
        },
        {
          h3: "文学>",
          h4: "畅销榜>",
          t1: "中国现代随笔",
          t2: "名家作品",
          t3: "文集",
          t4: "纪实文学",
          t5: "中国古诗词"
        },
        {
          h3: "青春文学>",
          h4: "畅销榜>",
          t1: "爱情/情感",
          t2: "玄幻",
          t3: "古代言情",
          t4: "穿越/重生",
          t5: "校园"
        },
        {
          h3: "动漫幽默>",
          h4: "畅销榜>",
          t1: "大陆漫画",
          t2: "欧美漫画",
          t3: "港台漫画",
          t4: "日韩漫画",
          t5: "幽默搞笑积"
        },
        {
          h3: "成功/励志>",
          h4: "畅销榜>",
          t1: "成功/激励",
          t2: "人生哲学",
          t3: "心灵与修养",
          t4: "口才/演讲",
          t5: "智商与智谋"
        },
        {
          h3: "传记>",
          h4: "畅销榜>",
          t1: "文学家",
          t2: "政治人物",
          t3: "女性人物",
          t4: "财经人物",
          t5: "历史人物"
        },
        {
          h3: "艺术>",
          h4: "畅销榜>",
          t1: "绘画",
          t2: "书法",
          t3: "音乐",
          t4: "摄影",
          t5: "设计"
        },
        {
          h3: "童书>",
          h4: "畅销榜>",
          t1: "0-2岁",
          t2: "3-6岁",
          t3: "7-10岁",
          t4: "11-14岁",
          t5: "百科"
        },
        {
          h3: "中小学教辅>",
          h4: "畅销榜>",
          t1: "中小学阅读",
          t2: "工具书",
          t3: "语文作文",
          t4: "小学一年级",
          t5: "小学二年级"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
        {
          h3: "考试>",
          h4: "畅销榜>",
          t1: "考研",
          t2: "公务员考试",
          t3: "司法考试",
          t4: "计算机考试",
          t5: "外贸"
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.clear::after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.main {
  margin-left: 2.703125rem;
  .imgtit {
    width: 100%;
  }
  .el-row {
    margin-bottom: .3125rem;
    margin-top: .078125rem;
    // height: .9375rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: .0625rem;
  }
  .bg-purple-dark {
    background: #fff;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: .0625rem;
    min-height: .9375rem;
    .meirong {
      // height: .46875rem;
      text-indent: .390625rem;
      padding: .234375rem 0;
      span {
        display: block;
      }
      .meirong1 {
        font-size: .1875rem;
        font-weight: bold;
      }
      .meirong2 {
        font-size: .15625rem;
        color: #a6a6a6;
      }
    }
  }
  .row-bg {
    padding: .15625rem 0;
    background-color: #fff;
  }
  .bangdan {
    background-color: white;
    h3 {
      font-size: .34375rem;
      padding: .1875rem 0 0 .21875rem;
    }
    p{
      font-size: .34375rem;
    }
    .van-grid-item {
      width: 33.33%;
      height: 2.34375rem;
      img {
        width: 1.515625rem;
        height: 1.515625rem;
      }
    }
  }
  .xiaoshuo {
    height: 2.8125rem;
    margin-top: .15625rem;
    background-color: white;
    font-size: .25rem;
    .xiaoshuotit {
      padding: .1875rem .15625rem 0 .21875rem;
      h3 {
        float: left;
      }
      h4 {
        float: right;
        color: #969696;
      }
    }
    .van-row {
      height: .6875rem;
      padding: .03125rem;
      text-align: center;
      line-height: .6875rem;
      .van-col {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        &:nth-child(3n) {
          border-right: none;
        }
      }
    }
  }
}
</style>