<template>
  <div id="app">
    <keep-alive exclude="detail,myShoppingCart">
      <router-view></router-view>
    </keep-alive>
    <main-tarbar></main-tarbar>
  </div>
</template>
<script>
import MainTarbar from "@/components/content/mainTarBar";

export default {
  components: {
    MainTarbar,
  },
};
</script>
<style>
@import url(~@/assets/css/base.css);
</style>
