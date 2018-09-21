<template>
  <div id="app">
    <body>
      <h2>{{ nth }}</h2>
      <h3>{{ title }}</h3>
      <h4>Table of Contents</h4>
      <ol type="1" id="titles">
        <li>Directives, Data Rendering</li>
        <li>Methods, Computed, Watchers</li>
        <li>Components</li>
        <li>Vue CLI and Nuxt.js</li>
        <li>Animations</li>
        <li>Filters, Mixins, Custom Directives</li>
        <li>Vuex</li>
      </ol>

    <h4>Examples and Challenges</h4>
		<ul id="specifics">
			<li><router-link to="/2vs/examples" exact class="list" id="vsList1">Examples List 1</router-link></li>
			<li><router-link to="/2vs/challenges" exact class="list" id="vsList2">Challenges List 2</router-link></li>
		</ul>

		<h4>Vue Ecosystem</h4>
		<ul id="ecosystem">
			<li><a id="ecosystem1" href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
			<li><a id="ecosystem2" href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
			<li><a id="ecosystem3" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
			<li><a id="ecosystem4" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
		</ul>
    </body>
  </div>
</template>

<script>
export default{ 
  name: 'app',
  data () {
    return {
      nth: '2nd Class',
      title: 'Intro to Vue Tutorial by Sarah Drasner @ FrontEnd Masters'
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

#titles, #specifics, #ecosystem{
  padding: 0 0 0 0;
  margin: 10px 0 10px 0;
}

#ecosystem li{
  display: inline-block;
  margin: 0 10px;
}

a#ecosystem1:link, a#ecosystem2:link, a#ecosystem3:link, a#ecosystem4:link, a#vsList1:link, a#vsList2:link{
  text-decoration: none;
  color: darkgray;
}
a#ecosystem1:visited, a#ecosystem2:visited, a#ecosystem3:visited, a#ecosystem4:visited, a#vsList1:visited, a#vsList2:visited{
  color: darkgray;
}
a#ecosystem1:hover, a#ecosystem2:hover, a#ecosystem3:hover, a#ecosystem4:hover, a#vsList1:hover, a#vsList2:hover{
  color: green;
  text-decoration: underline;
}
a#ecosystem1:active, a#ecosystem2:active, a#ecosystem3:active, a#ecosystem4:active, a#vsList1:hover, a#vsList2:hover{
  background-color: lightgray;
}

.list{
	font-size: 1.1em
}
</style>