<template>
	<div id="app">
    {{ text }} Nice to meet Vue.

     <ul>
      <li v-for="item in items" v-bind:key='item.id'>
        {{ item }}
      </li>
    </ul>

    <ul>
      <li v-for="num in 5" v-bind:key='num.id'>
        {{ num }}
      </li>
    </ul>
  </div>
</template>

<script>
export default{ 
	data(){
		return{
      text: 'Hello Class!',
      items: ['A', 'B', 'C', 'D']
		}
	}
}
</script>

<style scoped lang="scss">
#app {
  text-align: left;
  padding: 70px;
  font-size: 22px;
  max-width: 360px;
  margin: 0 auto;
  display: table;
}
</style>