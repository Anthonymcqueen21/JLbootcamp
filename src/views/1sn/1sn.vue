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
        <li>Pseudo Classes</li>
        <li>Mathematical Operators</li>
        <li>Creating a Grid w/ Sass Math</li>
        <li>Color Functions</li>
        <li>The @Content Keyword</li>
        <li>If Statements</li>
      </ol>
		<h4>Webpage made with Scss</h4>
		<ul id="blogs">
			<li><router-link to="/1sn/webpage" exact class="list" id="snList">Webpage Link</router-link></li>
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
      title: 'Sass Tutorial by Net Ninja @ YouTube'
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

#titles, #blogs{
  padding: 0;
  margin: 10px 0 10px 0;
}

#ecosystem li{
  display: inline-block;
  margin: 0 10px;
}

a#snList:link{
  text-decoration: none;
  color: darkgray;
}
a#snList:visited{
  color: darkgray;
}
a#snList:hover{
  color: green;
  text-decoration: underline;
}
a#snList:active{
  background-color: lightgray;
}

.list{
	font-size: 1.1em
}
</style>