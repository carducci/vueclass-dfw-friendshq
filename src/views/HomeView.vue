<template>
    <v-layout row wrap>


        <v-flex md3 sm12 v-for="card in cards">
            <router-link v-bind:to="card.route">
                <v-card>
                    <v-icon color="red" size="50px">{{card.icon}}</v-icon>
                    <v-card-title>{{card.title}}</v-card-title>
                    <v-card-text>{{card.number}}</v-card-text>
                </v-card>
            </router-link>
        </v-flex>


    </v-layout>
</template>

<script>
  import axios from "axios";
    //let friends = [];
  export default {
    name: "HomeView",

    data: () => ({
      friends: [],
      cards: [
        {
          icon: "contacts",
          title: "Friends",
          number: 0,
          route: "/friends"
        },
        {
          icon: "favorite",
          title: "Favorites",
          number: 0,
          route: "/friends?favorite=true"
        }
      ]

    }),
    mounted() {
      axios.get("http://localhost:3000/friends")
        .then(response => {
          this.friends = response.data;
          let friendCount = this.friends.length;
          let favoriteCount = this.friends.filter((friend) => friend.fav).length;
          this.cards[0].number = friendCount;
          this.cards[1].number = favoriteCount;
        });
    }


  };
</script>

<style scoped>

</style>