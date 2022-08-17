<template>
  <div class="detail">
    <nar-bar class="nav-bar">
      <div class="slot-left" @click="backPage" slot="left"></div>
      <div slot="center">
        <ul class="clearFloat right-ul">
          <li
            :class="{ navbarActive: index == curentNavBarIndex }"
            v-for="(item, index) in navBarList"
            :key="index"
            @click="jumpPosiztion"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </nar-bar>
    <scroll ref="scroll" class="scroll-content">
      <swiper :swiperList="swiperList"></swiper>
      <goods-baseDsc :baseDescInfo="baseDescInfo"></goods-baseDsc>
      <goods-cateGory :cateGoryInfo="cateGoryInfo"></goods-cateGory>
      <goods-imgInfo :imginfoObj="imginfoObj"></goods-imgInfo>
      <goods-intro :goodsList="goodslist"></goods-intro>
      <loading v-show="loading"></loading>
    </scroll>
    <scroll-toTop
      v-show="scropTopIsHide"
      @click.native="scrollToTopHandle"
    ></scroll-toTop>
    <detail-tarBar @addShoppingCart="handleAddShoppingCart"></detail-tarBar>
  </div>
</template>

<script>
import { v4 } from "uuid";

import NarBar from "@/components/common/navBar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import Swiper from "@/components/common/banner/swiper";
import GoodsBaseDsc from "@/views/goodsDetail/childrenComponent/GoodsBaseDsc";
import GoodsCateGory from "@/views/goodsDetail/childrenComponent/GoodsCategory";
import GoodsImgInfo from "@/views/goodsDetail/childrenComponent/GoodsImgInfo";
import GoodsIntro from "@/components/content/GoodsIntro";
import DetailTarBar from "@/views/goodsDetail/childrenComponent/GoodsDetailTarBar";
import { mapMutations } from "vuex";
import { backToTop, loading, imgLoadingRefresh } from "@/common/minxin";
export default {
  name: "detail",
  data() {
    return {
      swiperList: [
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
      scrollItem: null,
      navBarList: ["商品", "参数", "评论", "推荐"],
      curentNavBarIndex: 0,
      baseDescInfo: {
        title:
          "欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】",
        newPrice: "56.64",
        oldPrice: "59.00",
        sealMsg: {
          sealVolume: 52,
          collectNum: 20,
        },
      },
      imginfoObj: {
        desc: " 欧莱雅(LOREAL)玻尿酸洗护套装（洗发露440ml+润发乳440ml控油蓬松头皮清爽适合干发无硅油）【朱一龙亲选】 ",
        list: [
          {
            introduce: "穿着效果",
            data: [
              {
                id: v4(),
                url: "http://localhost:8080/home/goodsHome/3.webp",
              },
              {
                id: v4(),
                url: "http://localhost:8080/home/goodsHome/3.webp",
              },
              {
                id: v4(),
                url: "http://localhost:8080/home/goodsHome/3.webp",
              },
            ],
          },
          {
            introduce: "内部效果",
            data: [
              {
                id: v4(),
                url: "http://localhost:8080/home/goodsHome/3.webp",
              },
              {
                id: v4(),
                url: "http://localhost:8080/home/goodsHome/3.webp",
              },
              {
                id: v4(),
                url: "http://localhost:8080/home/goodsHome/3.webp",
              },
            ],
          },
        ],
      },
      goodslist: [
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

      cateGoryInfo: {
        imgUrl: "http://localhost:8080/home/banner/1.jpg",
        cateGoryName: "阿究究",
        countSaleNum: 58.0,
        allGoodsNum: 86,
        describeScore: 4.6,
        priceScore: 5,
        qualityScore: 3,
      },

      loadingData: [],

      positionList: [],
    };
  },
  mounted() {
    this.scrollItem = this.$refs.scroll.bsScroll;
    //加载更多
    console.log(1);

    this.scrollItem.scrollTo(0, 0);
    this.scrollItem.on("pullingUp", () => {
      this.loading = true;

      setTimeout(() => {
        if (!this.loadingData.length) {
          this.loadingData = JSON.parse(
            JSON.stringify(
              this.goodslist.slice(0, Math.ceil(this.goodslist.length / 2))
            )
          );
        }

        this.goodslist.push(...this.loadingData);
        this.scrollItem.finishPullUp();
        this.loading = false;
      }, 1000);
    });
  },
  mixins: [backToTop, loading, imgLoadingRefresh],

  methods: {
    backPage() {
      this.$router.back();
    },
    handleAddShoppingCart() {
      const infoData = {
        id: this.$route.params.id,
        imgUrl: "http://localhost:8080/home/banner/4.webp",
        title: this.baseDescInfo.title,
        price: this.baseDescInfo.newPrice,
        addNum: 1,
        isChecked: false,
      };
      this.$store.dispatch("shoppingAbount/isAddShoopingCart", infoData);

      this.$toast.show("操作成功", 1000);
    },
    jumpPosiztion() {},
  },
  components: {
    NarBar,
    Scroll,
    Swiper,
    GoodsBaseDsc,
    GoodsCateGory,
    GoodsImgInfo,
    GoodsIntro,

    DetailTarBar,
  },
};
</script>

<style lang="less" scoped>
.detail {
  .nav-bar {
    .slot-left {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-top: 1px solid #666;
      border-left: 1px solid #666;
      transform: rotate(-45deg);
    }
    .right-ul {
      .navbarActive {
        color: red;
      }
      li {
        float: left;
        padding: 0 15px;
        font-size: 14px;
      }
    }
  }
  .scroll-content {
    margin-top: 44px;
    position: relative;

    height: calc(100vh - 44px);
    z-index: 1;
    background-color: #fff;
  }
}
</style>
