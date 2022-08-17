<template>
  <div>
    <swiper class="swiper" :options="options">
      <swiper-slide
        ><img src="~@/assets/img/home/banner/1.jpg" alt=""
      /></swiper-slide>
      <swiper-slide>2</swiper-slide>
      <swiper-slide>3</swiper-slide>
      <swiper-slide>4</swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      options: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 300px;
}
</style>
