<template>
  <div class="tabBarBox">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tabBarBox {
  height: 39px;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 2px -1px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
