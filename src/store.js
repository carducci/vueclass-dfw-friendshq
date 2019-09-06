import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    friends: []
  },
  actions: {
    loadData({ commit }) {
      axios.get("http://localhost:3000/friends")
        .then((response) => {
          commit("setFriends", response.data);
        });
    }
  },
  mutations: {
    setFriends(state, payload) {
      state.friends = payload;
    }
  }

});