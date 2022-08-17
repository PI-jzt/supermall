export default {
    namespaced: true,
    actions: {
        isAddShoopingCart(context, value) {
            const indexId = context.state.shoppingCartData.find(item => item.id == value.id)
            if (!indexId) {
                context.commit('addNewShoppingCart', value)
            } else {
                context.commit('addShoppingCart', value.id)
            }



        }
    },
    mutations: {
        addNewShoppingCart(state, value) {
            state.shoppingCartData.push(value)
        },
        addShoppingCart(state, id) {
            const indexId = state.shoppingCartData.find(item => item.id == id)
            indexId.addNum += 1
        }
    },
    state: {
        shoppingCartData: []
    },
    getters: {
        getAllShoppingCartData(state) {
            return state.shoppingCartData
        }
    },


}