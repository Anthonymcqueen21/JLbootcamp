<template>
	<div class="container">
    <h3>Type here:</h3>
    <textarea class="message" rows="2" v-model="message" maxlength="72"></textarea><br>

    <p class="booktext">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default{ 
  data(){
    return {
      message: 'This is a good place to type things.'
    }
	}
}
</script>

<style scoped lang="scss">
// @import "src/scss/1sn/variables.scss"; (absolute path)
@import "../../../scss/2vs/variables.scss";

body {
  background: #d1d3d4;
  font-family: 'Bitter', serif;
}

.container {
  margin: 0 auto;
  display: flex;
  width: $width;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.books {
  width: $width; 
}

.booktext {
  white-space: pre-line;
  overflow-wrap: break-word;
  position: absolute;
  font-size: 20px;
  width: 300px;
  height: 10px;
  transform: translate(50px, 10px) skew(-7deg) rotate(-5deg);
}

h3 {
  text-align: center;
}

textarea {
  color: #777;
  border: none;
  width: 300px;
  padding: 5px 10px;
  border-radius: 10px;
}
</style>