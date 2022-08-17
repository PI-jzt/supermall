<template>
  <div class="tarbar-item" @click="changeBarHandler">
    <div v-if="getAcite"><slot name="imgIcon-active"></slot></div>
    <div v-else class="no-active-icon"><slot name="imgIcon"></slot></div>

    <div :style="getFontColor"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    toPath: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  methods: {
    changeBarHandler() {
      this.$router.push(this.toPath);
    },
  },
  computed: {
    getFontColor() {
      return this.getAcite ? { color: this.activeColor } : null;
    },
    getAcite() {
      return this.$route.path.indexOf(this.toPath) !== -1;
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/assets/font/iconfont.css);
.tarbar-item {
  flex: 1;
  text-align: center;
  .no-active-icon {
    font-size: 16px;
  }
  p {
    font-size: 12px;
    margin: 0;
  }
  .active {
    color: red;
  }
}
</style>
