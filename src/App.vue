<template>
  <div>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Poor+Story" rel="stylesheet">
    </head>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './views/header.vue';

export default {
  components: {
    'app-header': header
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Poor Story', cursive;
}
</style>
