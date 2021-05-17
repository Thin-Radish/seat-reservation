import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodList:[],
    seatList:[],
    index:0,
  },
  mutations: {
    commitFoodList(state,paylod){
      state.foodList = paylod;
    },
    commitSeatList(state,paylod){
      state.seatList = paylod;
    },
  },
  actions: {
  },
  modules: {
  }
})
