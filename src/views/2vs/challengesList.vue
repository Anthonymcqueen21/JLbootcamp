<template>
  <div id='app'>
		<ul>
			<li><router-link to="/2vs/challenges/1" exact class="link" id="vsChallenges1">Challenge 1</router-link></li>
			<li><router-link to="/2vs/challenges/2" exact class="link" id="vsChallenges2">Challenge 2</router-link></li>
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

a#vsChallenges1:link, a#vsChallenges2:link{
  text-decoration: none;
  color: darkgray;
}
a#vsChallenges1:visited, a#vsChallenges2:visited{
  color: darkgray;
}
a#vsChallenges1:hover, a#vsChallenges2:hover{
  color: green;
	text-decoration: underline;
	font-weight: bold;
	font-style: italic;
}
a#vsChallenges1:active, a#vsChallenges2:active{
  background-color: lightgray;
}
</style>