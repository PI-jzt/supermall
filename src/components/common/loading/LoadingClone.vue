<template>
  <div class="loading" v-show="isShow" :style="location">loading...</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      location: {},
    };
  },
  show(config, delay) {
    this.location = config;
    this.isShow = true;
    setTimeout(() => {
      this.isShow = false;
    }, delay);
  },
};
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  bottom: 39px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #666;
}
</style>
