<template>
  <div class="tip">
    <span class="tip-icon"></span><span class="tip-text">顶部</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.tip {
  position: fixed;
  right: 10px;
  bottom: 75px;
  width: 50px;
  z-index: 999;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  background-color: white;
  .tip-icon {
    display: block;
    width: 10px;
    height: 10px;
    margin: 0 auto;
    margin-top: 10px;
    border-left: 1px solid #999;
    border-top: 1px solid #999;
    transform: rotate(45deg);
  }
  .tip-text {
    margin-top: -5px;
    font-size: 12px;
    color: #666;
  }
}
</style>
