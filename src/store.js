import Vuex from "vuex";

import Vue from "vue";

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
  }

});