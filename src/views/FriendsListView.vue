<template>
    <div id="FriendsListView">
        Friends List
        <ul>
            <li v-for="friend in computedFriendList" v-bind:key="friend.id">
                <!-- Show all friends if favoritesOnly is false

                 Show only favorites if favoritesOnly is true-->
                {{friend.firstName}}
            </li>
        </ul>
    </div>
</template>

<script>
  import axios from "axios";
  import { getFavQueryParam } from "@/shared/helper-functions";

  export default {
    name: "FriendsListView",

    data: function() {

      return {
        friends: [],
        favoritesOnly: false
      };
    },
    computed: {
      computedFriendList: function() {
        // If favoritesOnly is false, return the whole list
        if (!this.favoritesOnly) {
          return this.friends;
        } else {
          return this.friends.filter((friend) => friend.fav);
        }
        // If favoritesOnly is true, only return favorites

      }
    },
    mounted() {
      axios.get("http://localhost:3000/friends")
        .then(response => {
          this.friends = response.data;
        });


      this.favoritesOnly = getFavQueryParam(this.$route);
      console.log(this.favoritesOnly);
    }
  };
</script>

<style scoped>

</style>