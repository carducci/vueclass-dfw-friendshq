<template>
    <div>
        <form>
            <input type="text" value="firstName" placeholder="first name" v-model="friendData.firstName"/>
            <input type="text" value="lastName" placeholder="last name" v-model="friendData.lastName"/>
            <input type="checkbox" value="fav" v-model="friendData.fav"/> favorite

            <button v-on:click="submit()">Submit</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';
  export default {
    data: function() {
      return {
        friendData: {
          firstName: "",
          lastName: "",
          fav: false
        }
      };
    },
    methods: {
      submit: function() {
        // create it ???
        // axios.send();
        axios.post("http://localhost:3000/friends", this.friendData)
          .then(() => console.log("success"))
          .catch(() => console.error("failed"))
      }
    },
    name: "FriendDetailView"
  };
</script>

<style scoped>

</style>