import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        item: {
            coinName2: '',
            coinImg1: '',
            coinName1: '',
            coinImg2: '',
            coinAddr2: '',
            coinAddr1: ''
        }
        
    },
    mutations: {
        changeName(state, data) {
            state.item.coinName1 = data.name1
            state.item.coinImg1 = data.img1
            state.item.coinAddr1 = data.addr1
            state.item.coinName2 = data.name2
            state.item.coinImg2 = data.img2
            state.item.coinAddr2 = data.addr2
        },
        changeNull(state, data) {
            state.item = data
        }
    }
})