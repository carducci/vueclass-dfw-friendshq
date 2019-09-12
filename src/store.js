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
    },
    addFriend({commit, payload}) {
      axios.post("http://localhost:3000/friends", payload)
        .then(() => console.log("success"))
        .catch(() => console.error("failed"));
    }
  },
  mutations: {
    setFriends(state, payload) {
      state.friends = payload;
    }
  }

});