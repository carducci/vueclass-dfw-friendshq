import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    friends: [
      {
        "firstName": "Matt",
        "lastName": "Forsythe",
        "gender": "none",
        "fav": false,
        "id": 3
      },
      {
        "id": 4,
        "firstName": "Nate",
        "lastName": "Schutta",
        "gender": "male",
        "fav": true
      }
    ]
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