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
  export default {
    name: "HomeView",

    data: () => ({
      cards: [
        {
          icon: "contacts",
          title: "Friends",
          number: 100,
          route: "/friends"
        },
        {
          icon: "favorite",
          title: "Favorites",
          number: 1,
          route: "/friends?favorite=true"
        }
        ]

    })


  };
</script>

<style scoped>

</style>