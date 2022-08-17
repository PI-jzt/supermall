<template>
  <div class="goodsIntro-content" v-if="goodsList.length">
    <div
      class="goods-item"
      v-for="(item, index) in goodsList"
      :key="index"
      @click="goToDetailPage(item.id)"
    >
      <a href="javascript:;" @click="goToDetailPage(item.id)">
        <img v-lazy="item.url" alt="" @load="requestRefresh" />
        <p class="goods-title">{{ item.title }}</p>
        <span class="goods-price">¥{{ item.price }}</span>
      </a>
    </div>
  </div>
  <div v-else class="none">暂无数据</div>
</template>

<script>
export default {
  props: {
    goodsList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loadLength: 0,
    };
  },

  methods: {
    requestRefresh() {
      if (++this.loadLength > this.goodsList.length)
        this.$bus.$emit("requestRefresh");
    },
    goToDetailPage(id) {
      this.$router.push("/goodsDetail/" + id);
    },
  },
};
</script>

<style lang="less" scoped>
.none {
  color: #666;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 20px;
}
.goodsIntro-content {
  display: flex;
  flex-wrap: wrap;
  .goods-item {
    width: 50%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 5px 10px;
    .goods-title {
      font-size: 12px;
      color: #666;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .goods-price {
      text-align: left;
      font-size: 16px;
      font-weight: 700;
      color: red;
    }
  }
}
</style>
