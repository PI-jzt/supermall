<template>
  <div class="baseDesc-content">
    <span class="content-title">
      {{ baseDescInfo.title }}
    </span>
    <div class="price-msg">
      <span class="new-price">¥{{ baseDescInfo.newPrice }}</span
      ><span class="old-price">¥{{ baseDescInfo.oldPrice }}</span
      ><em class="tips">火热促销</em>
    </div>
    <div class="seal-msg">
      <span>销量 {{ baseDescInfo.sealMsg.sealVolume }}</span>
      <span>收藏 {{ baseDescInfo.sealMsg.collectNum }}人</span>
      <span>退货补运费</span>
    </div>
    <div class="promise-msg">
      <div class="promise-item"><i class="promise-icon"></i>7天无理由发货</div>
      <div class="promise-item"><i class="promise-icon"></i>72小时发货</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    baseDescInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.baseDesc-content {
  background-color: #fff;
  padding: 10px;
  .content-title {
    font-size: 18px;
    color: black;
  }
  .price-msg {
    text-align: left;
    margin-top: 10px;
    .new-price {
      font-size: 24px;
      color: red;
    }
    .old-price {
      padding: 0 5px;
      font-size: 12px;
      font-style: italic;
      text-decoration: line-through;
    }
    .tips {
      padding: 3px;
      color: #ffffff;
      background-color: red;
      border-radius: 25%;
    }
  }
  .seal-msg {
    display: flex;
    padding: 30px 0 12px;
    border-bottom: 1px solid #666;
    font-size: 14px;
    color: #666;
    justify-content: space-between;
    span {
    }
  }
  .promise-msg {
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    .promise-item {
      font-size: 14px;
      .promise-icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        position: relative;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid green;
        &::before {
          content: "";
          position: absolute;
          top: 40%;
          left: 50%;
          width: 4px;
          height: 8px;
          transform: translate(-50%, -50%) rotate(45deg);
          border-bottom: 1px solid green;
          border-right: 1px solid green;
        }
      }
    }
  }
}
</style>
