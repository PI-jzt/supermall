<template>
  <div class="tarbar-content">
    <div class="tarbar-left">
      <div class="tarbar-left-item">
        <i class="iconfont icon-kehufuwukefu"></i>
        <span>客服</span>
      </div>
      <div class="tarbar-left-item">
        <i class="iconfont icon-dianpu"></i>
        <span>店铺</span>
      </div>
      <div class="tarbar-left-item">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="tarbar-right">
      <button class="join-cart" @click="addShoppingCart">加入购物车</button
      ><button class="buyIt">购买</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addShoppingCart() {
      this.$emit("addShoppingCart");
    },
  },
};
</script>

<style lang="less" scoped>
.tarbar-content {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;

  z-index: 999;
  text-align: center;

  .tarbar-left {
    flex: 1;
    display: flex;
    .tarbar-left-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .iconfont {
        font-size: 24px;
      }
    }
  }
  .tarbar-right {
    flex: 1;
    .join-cart {
      width: 60%;
      background-color: #ffd909;
      padding: 20px 10px;
      color: black;
    }
    .buyIt {
      width: 40%;
      background-color: #ff7192;
      padding: 20px 10px;
      color: white;
    }
  }
}
</style>
