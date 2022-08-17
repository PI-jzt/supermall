import Loading from './LoadingClone'
import Vue from 'vue'
export default {
    install(vue, arg) {
        const loadingCurst = vue.extend(Loading)
        const loadingCom = new loadingCurst
        loadingCom.$mount(document.createElement('div'))
        document.body.appendChild(loadingCom.$el)
        Vue.prototype.$loading = loadingCom
    }
}