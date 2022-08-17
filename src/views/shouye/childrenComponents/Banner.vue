<template>
  <div>
    <swiper class="swiper-container" :swiperList="swiperList"> </swiper>
  </div>
</template>

<script>
import swiper from "@/components/common/banner/swiper";

export default {
  data() {
    return {
      swiperList: [
        {
          id: 1,
          url: "http://localhost:8080/home/banner/1.jpg",
        },
        {
          id: 2,
          url: "http://localhost:8080/home/banner/2.webp",
        },
        {
          id: 3,
          url: "http://localhost:8080/home/banner/1.jpg",
        },
        {
          id: 4,
          url: "http://localhost:8080/home/banner/1.jpg",
        },
      ],
    };
  },
  mounted: {},
  components: {
    swiper,
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 310px;
}
</style>
