<template>
  <div id='app'>
		<ul>
			<li><router-link to="/2vs/examples/1" exact class="link" id="vsExamples1">Example 1</router-link></li>
			<li><router-link to="/2vs/examples/2" exact class="link" id="vsExamples2">Example 2</router-link></li>
		</ul>
  </div>
</template>

<style scoped lang="scss">
.link{
	font-size: 1.1em
}

#app li{
  display: list-item;
  text-align: left;
  padding: 0 0 0 10px;
	list-style-position: inside;
  display: inline-block;
  margin: 0 10px;
}

#app{
  padding: 0;
  margin: 10px 0 10px 0;
}

a#vsExamples1:link, a#vsExamples2:link{
  text-decoration: none;
  color: darkgray;
}
a#vsExamples1:visited, a#vsExamples2:visited{
  color: darkgray;
}
a#vsExamples1:hover, a#vsExamples2:hover{
  color: green;
	text-decoration: underline;
	font-weight: bold;
	font-style: italic;
}
a#vsExamples1:active, a#vsExamples2:active{
  background-color: lightgray;
}
</style>