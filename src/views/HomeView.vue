<template>
    <v-layout row wrap>


        <v-flex md3 sm12>
            <router-link v-bind:to="cards[0].route">
                <HomeCard :card="cards[0]">
                    <!--Put the numberCount here-->
                    {{friendCount}}
                </HomeCard>
            </router-link>
        </v-flex>
        <v-flex md3 sm12>
            <router-link v-bind:to="cards[1].route">
                <HomeCard :card="cards[1]">
                    <!--Put the numberCount here-->
                    {{favoriteCount}}
                </HomeCard>
            </router-link>
        </v-flex>


    </v-layout>
</template>

<script>
  import HomeCard from "../components/HomeCard";
  //let friends = [];
  export default {
    name: "HomeView",
    components: { HomeCard },
    data: () => ({
     // friends: [],
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
    methods: {

    },
    computed: {
      friends: function() {
        return this.$store.state.friends;
        },
      friendCount: function() {
        return this.$store.state.friends.length;
      },
      favoriteCount: function() {
        return this.$store.state.friends.filter((friend) => friend.fav).length;
      }
    },
    mounted() {
      // axios.get("http://localhost:3000/friends")
      //   .then(response => {
      //     this.friends = response.data;
      //     let friendCount = this.friends.length;
      //     let favoriteCount = this.friends.filter((friend) => friend.fav).length;
      //     this.cards[0].number = friendCount;
      //     this.cards[1].number = favoriteCount;
      //   });
    }


  };
</script>

