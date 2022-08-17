<template>
  <div class="recommedContent">
    <div class="rc-item" @click="goToDetail(1)">
      <a href="javascript:;"
        ><img src="~@/assets/img/home/recommed/1.webp" alt="" />
        <h6>
          妙选
          MIAOXUAN999足银手镯女三生三世银手环韩版时尚简约银饰送女友生日礼物七夕情人节礼物
        </h6>
        <span>¥179.00</span></a
      >
    </div>
    <div class="rc-item">
      <a href="javascript:;"
        ><img src="~@/assets/img/home/recommed/2.webp" alt="" />
        <h6>
          果本（gooben）杏仁甘草美白烟酰胺护肤品套装（洁面+精华水+精华乳+眼霜+精华霜+修颜霜）
        </h6>
        <span>¥129.00</span></a
      >
    </div>
    <div class="rc-item">
      <a href="javascript:;"
        ><img src="~@/assets/img/home/recommed/3.webp" alt="" />
        <h6>
          京东京造 瑜伽垫 高弹防滑健身垫跳槽垫运动垫 高密度加长加宽加厚 185*80cm
          星光蓝 含绑带
        </h6>
        <span>¥59.00</span>
      </a>
    </div>
    <div class="rc-item">
      <a href="javascript:;"
        ><img src="~@/assets/img/home/recommed/4.webp" alt="" />
        <h6>
          稻香村DXC 月饼礼盒
          盛世金尊1300g双层礼盒8味16饼含蛋黄莲蓉月饼（硬质礼盒）
        </h6>
        <span>¥128.00</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommedDate: null,
    };
  },

  methods: {
    goToDetail(goodsId) {
      this.$router.push("/goodsDetail:" + goodsId);
    },
  },
};
</script>

<style lang="less" scoped>
.recommedContent {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 5px;
  background-color: #fff;
  border-bottom: 10px solid #eee;
  flex-wrap: nowrap;

  .rc-item {
    width: 25%;

    a {
      display: block;
      text-align: center;

      h6 {
        color: #333;
        margin: 5px 3px 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span {
        color: #e1251b;
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
}
</style>
