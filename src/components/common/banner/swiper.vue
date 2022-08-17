<template>
  <div>
    <swiper :options="swiperOptions" class="swiperContent">
      <swiper-slide v-for="(item, index) in swiperList" :key="index"
        ><img :src="item.imgurl" alt=""
      /></swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {};
  },
  props: {
    swiperOptions: {
      type: Object,
      default() {
        return {
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
        };
      },
    },
    swiperList: {
      type: Array,
    },
  },

  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style lang="less" scoped>
.swiperContent {
  height: 310px;
  img {
    width: 100%;
  }
}
</style>
