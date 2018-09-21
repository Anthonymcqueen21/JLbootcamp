<template>
  <div id='app-header'>
    <nav>
			<ul>
				<li><router-link to="/" exact>Main</router-link></li>
				<li><router-link to="/1sn" exact>1sn</router-link></li>
				<li><router-link to="/2vs" exact>2vs</router-link></li>
			</ul>
	  </nav>
  </div>
</template>

<style scoped lang="scss">
@import "../scss/variables.scss";

ul{
  font-size: 1.2em;
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}

li{
  display: inline-block;
  margin: 0 10px;
}

a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

nav{
  background: $gray;
  padding: 14px 0;
  /* top right bottom left */
  margin: 0 0 10px 0;
}

.router-link-active{
  background: #eee;
  color: #444;
}
</style>