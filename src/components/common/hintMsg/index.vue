<template>
  <div class="hint-content" v-show="isShow">
    {{ tipsMsg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipsMsg: "",
      isShow: false,
    };
  },
  methods: {
    show(msg, delay) {
      if (msg.trim() != "") {
        this.tipsMsg = msg;
      }
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, delay);
    },
  },
};
</script>

<style lang="less" scoped>
.hint-content {
  font-size: 20px;
  font-weight: 700;
  position: fixed;
  top: 50%;
  background-color: gray;
  left: 50%;
  z-index: 10000;
  transform: translate(-50%, -50%);
}
</style>
