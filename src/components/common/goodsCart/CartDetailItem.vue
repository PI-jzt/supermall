<template>
  <div class="item-box">
    <input
      class="checked"
      ref="itemChecked"
      :checked="itemData.isChecked"
      @click="changeCheck"
      type="checkbox"
      name=""
    />
    <img :src="itemData.imgUrl" alt="" />
    <div class="text-box">
      <p>
        {{ itemData.title }}
      </p>
      <div class="price-num">
        <span class="price">¥{{ itemData.price }}</span
        ><span class="num">×{{ itemData.addNum }}</span>
      </div>
      <div class="alterNum">
        <span>-</span>
        <span>+</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeCheck() {
      this.$bus.$emit("changeCheck", {
        id: this.itemData.id,
        checked: this.$refs.itemChecked.checked,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.item-box {
  display: flex;

  .checked {
    align-self: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  img {
    width: 80px;
    height: 100px;
    padding: 10px;
  }
  .text-box {
    flex: 1;
    box-sizing: border-box;
    padding-right: 10px;
    position: relative;
    .alterNum {
      display: flex;
      justify-content: space-between;
      position: absolute;
    }
    p {
      margin: 10px 0;
      font-size: 15px;
    }
    .price-num {
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 20px;
        color: red;
      }
    }
  }
}
</style>
