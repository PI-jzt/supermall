<template>
  <div class="myCart-content">
    <nav-bar class="nav-bar">
      <div class="title" slot="center">
        购物车({{ shoppingCartData.length }})
      </div>
    </nav-bar>

    <scroll ref="scroll" class="scrollBox">
      <cart-detail :cartList="shoppingCartData"> </cart-detail>
    </scroll>
    <bottom-bar
      :cartList="shoppingCartData"
      @checkAll="handleCheckAll"
    ></bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import CartDetail from "@/components/common/goodsCart/CartDetail";
import Scroll from "@/components/common/scroll/Scroll";
import BottomBar from "@/components/common/goodsCart/BottonBar";
import { mapState } from "vuex";
export default {
  name: "myShoppingCart",
  data() {
    return {
      scrollItem: null,
      cartList: [],
    };
  },
  computed: {
    shoppingCartData() {
      this.cartList =
        this.$store.getters["shoppingAbount/getAllShoppingCartData"];

      return this.cartList;
    },
  },
  mounted() {
    this.scrollItem = this.$refs.scroll.bsScroll;
    this.$bus.$on("changeCheck", this.handleChangeCheck);
  },

  methods: {
    handleChangeCheck(obj) {
      const findItem = this.cartList.find((item) => item.id == obj.id);
      findItem.isChecked = obj.checked;
    },
    handleCheckAll(checked) {
      this.cartList.forEach((element) => {
        element.isChecked = checked;
      });
    },
  },
  destroyed() {
    this.$bus.$off("changeCheck");
  },
  components: {
    NavBar,
    CartDetail,
    Scroll,
    BottomBar,
  },
};
</script>

<style lang="less" scoped>
.myCart-content {
  .scrollBox {
    height: calc(100vh - 83px);
    margin-top: 44px;
  }
  .nav-bar {
    background-color: var(--color-text);
    .title {
      font-size: 20px;
      color: white;
    }
  }
}
</style>
