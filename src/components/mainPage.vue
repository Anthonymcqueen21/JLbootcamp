<template>
  <div id="app">
    <img src="../assets/logo.png">
    <body>
      <h2>{{ msg }}</h2>
      <h3>Table of Contents</h3>
      <ol type="1" id="titles">
        <li>"Introduction to Vue.js" by SD @ FE</li>
        <li>"Sass Tutorial by NN" by NN @ YouTube</li>
        <li>"Advanced Vue.js Features" @ FE</li>
        <li>"Intro to Data Structures for Interviews" @ FE</li>
        <li>"Node.js" @ OT</li>
        <li>"CS Fundamentals: Part 1" @ FE</li>
        <li>"CS Fundamentals: Part 2" @ FE</li>
        <li>"Webpack 4 Fundamentals" @ FE</li>
        <li>"TypeScript Fundamentals" @ FE</li>
      </ol>
    </body>
  </div>
</template>

<script>
export default{ 
  name: 'app',
  data () {
    return {
      msg: 'List of Classes'
    }
  }
}
</script>

<style scoped lang="scss">
h2{
  color: darkgreen;
  /* top right bottom left */
  margin: 0 0 20px 0;
}

h3{
  text-align: center;
  color: darkblue;
  margin: 5px 0 5px 0;
}

#app {
  text-align: center;
  padding: 20px;
  font-size: 22px;
  max-width: 800px;
  margin: 0 auto;
  display: table;
}

#titles li{
  display: list-item;
  text-align: left;
  padding: 0 0 0 10px;
  list-style-position: inside;
}

#titles{
  padding: 0;
  margin: 10px 0 10px 0;
}
</style>