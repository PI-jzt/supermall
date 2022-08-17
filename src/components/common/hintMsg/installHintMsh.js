import hintMsg from '@/components/common/hintMsg/index'
import Vue from 'vue'
export default {
    install(vue, arg) {
        const FeatureConstructor = vue.extend(hintMsg);
        const hintMsgCp = new FeatureConstructor
        let div = document.createElement('div')
        hintMsgCp.$mount(div)
        document.body.appendChild(hintMsgCp.$el)
        Vue.prototype.$toast = hintMsgCp
    }
}