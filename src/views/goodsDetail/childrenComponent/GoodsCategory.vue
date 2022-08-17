<template>
  <div class="category-content">
    <div class="category-title">
      <img class="category-icon" :src="cateGoryInfo.imgUrl" alt="" />
      <span class="category-text">{{ cateGoryInfo.cateGoryName }}</span>
    </div>
    <div class="category-desc">
      <div class="category-left">
        <div class="category-leftItem">
          <p>{{ cateGoryInfo.countSaleNum }}万</p>
          <span>总销量</span>
        </div>
        <div class="category-leftItem">
          <p>{{ cateGoryInfo.allGoodsNum }}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="category-right">
        <ul class="">
          <li class="category-rightLi">
            描述相符
            <span class="lowerNumber">{{ cateGoryInfo.describeScore }}</span>
            <span class="lower">低</span>
          </li>
          <li class="category-rightLi">
            价格合理
            <span class="hightNumber">{{ cateGoryInfo.priceScore }}</span>
            <span class="hight">高</span>
          </li>
          <li class="category-rightLi">
            质量满意
            <span class="lowerNumber">{{ cateGoryInfo.qualityScore }}</span>
            <span class="lower">低</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="catefory-bottom">
      <span class="come-category-text">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cateGoryInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.category-content {
  margin-top: 4px;
  background-color: #fff;
  .category-title {
    padding: 25px 14px;
    .category-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .category-text {
      font-size: 18px;
      color: #8a8a89;

      margin-left: 10px;
    }
  }
  .category-desc {
    display: flex;
    justify-content: center;
    .category-left {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 10px;

        border: 1px solid #f0f0ef;
        height: 70%;
      }
      width: 45%;
      display: flex;
      box-sizing: border-box;
      padding: 5px 16px;
      justify-content: space-between;
      .category-leftItem {
        flex: 1;
        text-align: center;
        p {
          margin: 5px 0;
        }
        span {
          font-size: 14px;
        }
      }
    }
    .category-right {
      flex: 1;
      ul {
        margin-left: 30px;
        padding-right: 50px;
      }
      .category-rightLi {
        display: flex;
        text-align: left;
        margin-bottom: 4px;
        justify-content: space-between;
        .lowerNumber {
          display: inline-block;
          width: 20px;
          text-align: left;
          color: green;
        }
        .hightNumber {
          display: inline-block;
          width: 20px;
          text-align: left;
          color: red;
        }
        .lower {
          margin-left: 2px;
          background-color: green;
          color: white;
        }
        .hight {
          margin-left: 2px;
          background-color: red;
          color: white;
        }
      }
    }
  }
  .catefory-bottom {
    text-align: center;
    padding: 20px 0 40px;
    .come-category-text {
      padding: 5px 20px;
      background-color: #eef2f4;
      border-radius: 20%;
      font-size: 16px;
    }
  }
}
</style>
