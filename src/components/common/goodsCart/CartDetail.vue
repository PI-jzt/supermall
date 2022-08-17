<template>
  <div class="cartDetail-content">
    <cartDetail-item v-for="item in cartList" :itemData="item" :key="item.id">
    </cartDetail-item>
  </div>
</template>

<script>
import cartDetailItem from "@/components/common/goodsCart/CartDetailItem";
export default {
  props: {
    cartList: {
      type: Array,
    },
  },

  components: {
    cartDetailItem,
  },
};
</script>

<style lang="less" scoped>
.cartDetail-content {
  background-color: #fff;
}
</style>
