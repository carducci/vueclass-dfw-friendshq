<template>
    <v-card>
        <v-icon color="red" size="50px">{{card.icon}}</v-icon>
        <v-card-title>{{card.title}}</v-card-title>
        <v-card-text><slot></slot></v-card-text>
    </v-card>
</template>
<script>
  export default {
    name: "HomeCard",
    props: {
      card: {}
    }
  };
</script>
