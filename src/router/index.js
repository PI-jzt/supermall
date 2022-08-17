import Vue from 'vue'
import VueRouter from 'vue-router'

const shouyeComponent = () =>
    import ('@/views/shouye/index')
const gwcComponent = () =>
    import ('@/views/gouwuche/index')
const fenleiComponent = () =>
    import ('@/views/fenlei/index')
const wodeComponent = () =>
    import ('@/views/wode/index')
const mainTarbarComponent = () =>
    import ('@/components/content/mainTarBar')
const goodsDetail = () =>
    import ('@/views/goodsDetail/GoodsDetail')
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/shouye'

    },
    {
        path: '/shouye',
        name: 'shouye',
        meta: { 'title': '首页' },
        component: shouyeComponent
    }, {
        path: '/gwc',
        name: 'gwc',
        meta: { 'title': '购物车' },
        component: gwcComponent
    }, {
        path: '/fenlei',
        name: 'fenlei',
        meta: { 'title': '分类' },
        component: fenleiComponent
    }, {
        path: '/wode',
        name: 'wode',
        meta: { 'title': '我的' },
        component: wodeComponent
    }, {
        path: '/goodsDetail/:id',
        meta: { 'title': '详情页' },

        component: goodsDetail
    }
]

const router = new VueRouter({
        routes,
        mode: 'history'
    })
    //重复点击时会报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)

}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)

}
router.beforeEach((to, from, next) => {


    document.title = to.matched.length > 0 ? to.matched[0].meta.title : ''
    next()

})
export default router