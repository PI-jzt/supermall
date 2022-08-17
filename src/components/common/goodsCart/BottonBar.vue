<template>
  <div class="bottom-bar">
    <label class="isCheckAll" for="check"
      ><input
        type="checkbox"
        :checked="isCheckAll"
        ref="checkbox"
        name=""
        @click="checkAll"
        id="check"
      />全选</label
    >
    <span class="total">合计: ¥{{ getTotalMoney }}</span>
    <button class="go-play">去计算({{ getAllNum }})</button>
  </div>
</template>

<script>
export default {
  props: ["cartList"],
  data() {
    return {};
  },

  methods: {
    checkAll() {
      this.$emit("checkAll", this.$refs.checkbox.checked);
    },
  },
  computed: {
    isCheckAll() {
      let identify = false;
      if (this.cartList.length > 0) {
        const index = this.cartList.some((item) => {
          return !item.isChecked;
        });
        identify = !index;
      }

      return identify;
    },
    getTotalMoney() {
      if (!this.cartList.length) {
        return 0;
      } else {
        let resulte = 0;
        let m = Math.pow(10, 2);
        resulte = this.cartList.reduce((now, next) => {
          let reduce = 0;
          if (next.isChecked) {
            reduce = parseFloat(next.price) * next.addNum;
          }

          return now + reduce;
        }, 0);
        return resulte.toFixed(2);
      }
    },
    getAllNum() {
      const num = this.cartList.filter((item) => {
        return item.isChecked;
      });
      return num.length;
    },
  },
};
</script>

<style lang="less" scoped>
.bottom-bar {
  position: fixed;
  bottom: 39px;
  width: 100%;
  background-color: #fff;
  left: 0;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  .isCheckAll {
    padding: 0 10px;
  }
  .total {
    flex: 1;
    margin-left: 10px;
    font-size: 16px;
    text-align: left;
  }
  .go-play {
    color: white;
    padding: 5px;
    background-color: #ff4900;
  }
}
</style>
