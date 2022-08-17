<template>
  <div class="main-box">
    <nav-bar class="navbar">
      <span slot="center" class="nav-title"> 购物街 </span>
    </nav-bar>
    <tab-control
      class="tabControl-clone"
      v-show="isTop"
      :tablist="tablist"
      :currentIndex="tabControlCureentIndex"
      @changeHomeGoodsDate="handeChangeDate"
    >
    </tab-control>
    <scroll class="wrapper" ref="scroll">
      <banner :swiperList="bannerList"></banner>
      <recommed></recommed>

      <tab-control
        ref="tabControl"
        :tablist="tablist"
        :currentIndex="tabControlCureentIndex"
        @changeHomeGoodsDate="handeChangeDate"
      >
      </tab-control>

      <goods-intro :goodsList="getCurrentHomeGoodsList"></goods-intro>
      <loading v-show="loading"></loading>
    </scroll>

    <scroll-toTop
      v-show="scropTopIsHide"
      @click.native="scrollToTopHandle"
    ></scroll-toTop>
  </div>
</template>

<script>
import { v4 } from "uuid";
import Scroll from "@/components/common/scroll/Scroll";
import NavBar from "@/components/common/navBar/NavBar";
import Banner from "@/components/common/banner/swiper";
import Recommed from "@/views/shouye/childrenComponents/Recommed";
import TabControl from "@/components/common/tabControl/TabControl";
import GoodsIntro from "@/components/content/GoodsIntro";
import homeRequest from "@/network/home";
import { backToTop, loading, imgLoadingRefresh } from "@/common/minxin";
export default {
  data() {
    return {
      tablist: ["精选", "智能先锋", "居家新品"],

      bscrollTag: null,
      homeGoodsList: {
        精选: {
          page: 1,
          data: [
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
            {
              id: v4(),
              title:
                " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
              price: "154.80",
              url: "http://localhost:8080/home/goodsHome/1.webp",
            },
          ],
        },
        智能先锋: {
          page: 1,
          data: [
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
            {
              id: v4(),
              title:
                " 中国移动 移动流量卡纯上网4g手机卡大王卡手机号电话卡日租不限速无限纯流量上网卡全国通用通话卡 店长推荐|天帝卡19元含95G全国流量，300分钟",
              price: "8.90",
              url: "http://localhost:8080/home/goodsHome/2.webp",
            },
          ],
        },
        居家新品: {
          page: 1,
          data: [
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
            {
              id: v4(),
              title: " 定金      BMW 宝马 X6 SUV 汽车整车新车订金",
              price: "5000.00",
              url: "http://localhost:8080/home/goodsHome/3.webp",
            },
          ],
        },
      },
      currentType: "精选",

      cloneData: [],
      isTop: false,
      tabControlCureentIndex: 0,
      leaveArea: 0,
      bannerList: [
        {
          id: v4(),
          imgurl: "http://localhost:8080/home/banner/1.jpg",
        },
        {
          id: v4(),
          imgurl: "http://localhost:8080/home/banner/2.webp",
        },
        {
          id: v4(),
          imgurl: "http://localhost:8080/home/banner/3.webp",
        },
        {
          id: v4(),
          imgurl: "http://localhost:8080/home/banner/4.webp",
        },
      ],
    };
  },
  mixins: [backToTop, loading, imgLoadingRefresh],
  mounted() {
    this.bscrollTag = this.$refs.scroll.bsScroll;

    //加载更多
    this.bscrollTag.on("pullingUp", () => {
      this.loading = true;
      setTimeout(() => {
        if (!this.cloneData.length) {
          this.cloneData = JSON.parse(
            JSON.stringify(this.homeGoodsList[this.currentType].data)
          );
        }
        this.homeGoodsList[this.currentType].data.push(...this.cloneData);
        this.bscrollTag.finishPullUp();
        this.loading = false;
      }, 1000);
    });

    this.bscrollTag.on("scroll", (coord) => {
      //tabControl吸顶效果
      const tabControlEl = this.$refs.tabControl.$el;
      const coordY = Math.abs(coord.y);
      if (coordY > tabControlEl.offsetTop) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    });
  },
  activated() {
    this.bscrollTag.scrollTo(0, this.bscrollTag.y);
  },
  deactivated() {
    this.leaveArea = this.bscrollTag.y;
  },
  methods: {
    handeChangeDate(obj) {
      this.currentType = obj.item;
      this.tabControlCureentIndex = obj.index;
    },
  },
  computed: {
    getCurrentHomeGoodsList() {
      const data = this.homeGoodsList[this.currentType].data;

      return data;
    },
  },
  destroyed() {
    this.$bus.$off("createBScroll");
  },
  components: {
    Scroll,
    NavBar,
    Banner,
    Recommed,
    TabControl,
    GoodsIntro,
  },
  created() {},
};
</script>

<style lang="less" scoped>
.main-box {
  position: relative;
  .tabControl-clone {
    position: absolute;

    top: 0;
    z-index: 999;
    left: 0;
  }
  .navbar {
    background-color: var(--color-text);
    .nav-title {
      font-size: 20px;
      color: white;
    }
  }
  .wrapper {
    margin-top: 44px;
    height: calc(100vh - 83px);
  }
}
</style>
