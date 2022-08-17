<template>
  <div>
    <swiper-slide>
      <slot class="img-slot"></slot>
    </swiper-slide>
  </div>
</template>

<script>
import { swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    swiperSlide,
  },
};
</script>

<style lang="less" scoped>
.img-slot {
  width: 100%;
}
</style>
