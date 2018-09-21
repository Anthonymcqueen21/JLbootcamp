<template>
  <div id="app">
    <body>
      <h2>{{ nth }}</h2>
      <h3>{{ title }}</h3>
      <h4>Table of Contents</h4>
      <ol type="1" id="titles">
        <li>What is Sass?</li>
        <li>Downloaded, Compiling Sass</li>
        <li>Sass Variables</li>
        <li>Nesting Styles</li>
        <li>Mixins</li>
        <li>Importing Files</li>
        <li>Importing Files</li>
        <li>Pseudo Classes</li>
        <li>Mathematical Operators</li>
        <li>Creating a Grid w/ Sass Math</li>
        <li>Color Functions</li>
        <li>The @Content Keyword</li>
        <li>If Statements</li>
      </ol>
		<h4>Vue Ecosystem</h4>
		<ul id="blogs">
			<li><a id="blogs-2-1" href="http://router.vuejs.org/" target="_blank" >Sass 1 of 2</a></li>
		</ul>
    </body>
  </div>
</template>

<script>
export default{ 
  name: 'app',
  data () {
    return {
      nth: '1st Class',
      title: '[Net Ninja] Sass Tutorial'
    }
  }
}
</script>

<style scoped lang="scss">
h2, h3{
  color: darkgreen;
  /* top right bottom left */
  margin: 0 0 20px 0;
}

h4{
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

#app li{
  display: list-item;
  text-align: left;
  padding: 0 0 0 10px;
	list-style-position: inside;
  display: inline-block;
  margin: 0 10px;
}

#titles li{
  display: list-item;
  text-align: left;
  padding: 0 0 0 10px;
  list-style-position: inside;
}

#titles, #ecosystem{
  padding: 0;
  margin: 10px 0 10px 0;
}

#ecosystem li{
  display: inline-block;
  margin: 0 10px;
}

a#blogs-2-1:link{
  text-decoration: none;
  color: darkgray;
}
a#blogs-2-1:visited{
  color: darkgray;
}
a#blogs-2-1:hover{
  color: green;
  text-decoration: underline;
}
a#blogs-2-1:active{
  background-color: lightgray;
}

// .secondList{
// 	font-size: 1.1em
// }
</style>