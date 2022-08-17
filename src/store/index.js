import Vue from 'vue'
import Vuex from 'vuex'
import shoppingCart from '@/store/shoppingCart/'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        shoppingAbount: shoppingCart
    }
})