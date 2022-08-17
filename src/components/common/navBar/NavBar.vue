<template>
  <div class="nav-bar">
    <div class="left-area">
      <slot name="left"></slot>
    </div>
    <div class="center-area">
      <slot name="center"></slot>
    </div>
    <div class="right-area">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="less" scoped>
.nav-bar {
  display: flex;
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  .left-area {
    width: 18%;
  }
  .center-area {
    flex: 1;
  }
  .right-area {
    width: 18%;
  }
}
</style>
