<template>
  <div class="imgInfo-content">
    <div class="imginfo-tips">
      {{ imginfoObj.desc }}
    </div>
    <div v-for="(item, index) in imginfoObj.list" :key="index">
      <p class="imgIntroduce">{{ item.introduce }}</p>
      <ul>
        <li class="imginfo-item" v-for="imgItem in item.data" :key="imgItem.id">
          <img @load="requestRefresh" v-lazy="imgItem.url" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imginfoObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loadLength: 0,
    };
  },
  methods: {
    requestRefresh() {
      if (++this.loadLength > this.imginfoObj.list.length)
        this.$bus.$emit("requestRefresh");
    },
  },
};
</script>

<style lang="less" scoped>
.imgInfo-content {
  background-color: #fff;
  margin-top: 5px;
  .imginfo-tips {
    position: relative;
    &::before {
      content: "▪";
      line-height: 5px;
      font-size: 20px;
      position: absolute;
      top: 16px;
      left: 10px;
      width: 100px;

      border-bottom: 1px solid #a6a6a5;
    }
    &::after {
      content: "▪";
      line-height: 5px;
      text-align: right;
      font-size: 20px;
      position: absolute;
      bottom: -10px;
      right: 10px;
      width: 100px;

      border-bottom: 1px solid #a6a6a5;
    }
    padding: 0 10px;
    padding-top: 30px;

    font-size: 15px;
  }
  .imgIntroduce {
    font-size: 18px;
    margin-left: 10px;
    font-weight: 500;
  }
}
</style>
