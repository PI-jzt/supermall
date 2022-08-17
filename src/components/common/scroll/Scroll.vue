<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ScrollBar from "@better-scroll/scroll-bar";
BScroll.use(Pullup);
BScroll.use(ScrollBar);
export default {
  data() {
    return {
      bsScroll: null,
    };
  },
  props: {
    BscrollConfig: {
      type: Object,
      default() {
        return {
          click: true,
          probeType: 3,
          pullUpLoad: true,
          scrollY: true,
          scrollbar: true,
        };
      },
    },
  },
  mounted() {
    this.bsScroll = new BScroll(".wrapper", this.BscrollConfig);
    this.bsScroll.on("refresh", () => {
      console.log("-----");
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
