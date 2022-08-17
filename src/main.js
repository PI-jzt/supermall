import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HintMsg from '@/components/common/hintMsg/installHintMsh'
import Loading from '@/components/common/loading/index'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
//解决移动端点击300ms问题
FastClick.attach(document.body)

//图片懒加载
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: require('@/assets/img/home/goodsHome/error.webp'),
    loading: require('@/assets/img//home/goodsHome/loading.gif'),
    attempt: 1,
});
//使用自定义插件
Vue.use(HintMsg)
Vue.use(Loading)

Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')