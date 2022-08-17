<template>
  <div class="tabControl" ref="tabControl">
    <div
      class="tab-item-box"
      v-for="(item, index) in tablist"
      :key="item.id"
      @click="changeBar(item, index)"
    >
      <a
        href="javascript:;"
        class="tab-item"
        :class="{ active: currentIndex == index }"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tablist: {
      type: Array,
      required: true,
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },

  methods: {
    //旧的选项切换
    /* tabChange(event) {
      Array.from(this.$refs.tabControl.children).forEach((item) => {
        const targetEl = item.querySelector(".tab-item");
        console.log(targetEl);

        targetEl.className = "tab-item";
      });
      const el = event.target;

      if (el.className == "tab-item") {
        el.className = el.className + " active";
      }
    }, */
    //更改后的
    changeBar(item, index) {
      this.$emit("changeHomeGoodsDate", { item, index });
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
.tabControl {
  display: flex;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid #999;

  text-align: center;
  padding: 14px 0;
  .tab-item-box {
    flex: 1;
    .tab-item {
      color: #333;
      padding-bottom: 5px;
      display: inline;
    }
  }
}
.active {
  color: var(--color-text);

  border-bottom: 2px solid #999;
}
</style>
