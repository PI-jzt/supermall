<template>
  <div>
    <tar-bar class="tarbarContent">
      <tabar-item toPath="/shouye" activeColor="red">
        <em slot="imgIcon-active" class="iconfont icon-shouyefill"></em>
        <em slot="imgIcon" class="iconfont icon-shouye"></em>
        <p slot="title">首页</p>
      </tabar-item>

      <tabar-item toPath="/fenlei" activeColor="pink">
        <em slot="imgIcon-active" class="iconfont icon-fenleixuanzhong"></em>
        <em slot="imgIcon" class="iconfont icon-fenlei"></em>
        <p slot="title">分类</p>
      </tabar-item>

      <tabar-item toPath="/gwc">
        <em slot="imgIcon-active" class="iconfont icon-gouwucheman"></em>
        <em slot="imgIcon" class="iconfont icon-gouwuchekong"></em>
        <p slot="title">购物车</p>
      </tabar-item>

      <tabar-item toPath="/wode">
        <em slot="imgIcon-active" class="iconfont icon-wodexuanzhong"></em>
        <em slot="imgIcon" class="iconfont icon-31wode"></em>
        <p slot="title">我的</p>
      </tabar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "@/components/common/TabBar/TabBar";
import TabarItem from "@/components/common/TabBar/TabBarItem";
export default {
  components: {
    TarBar,
    TabarItem,
  },
};
</script>

<style lang="less" scoped>
.tarbarContent {
  background-color: white;
}
</style>
