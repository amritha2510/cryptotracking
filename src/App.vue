<template>
  <router-view/>
</template>
<script>
console.log("in App")
export default{
  name: 'App' 
}
</script>

<style scoped> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#nav{
  padding : 30px
}

#nav a{
  font-weight: bold;
  color: pink;
}

#nav a.router-link-exact-active {
  color: purple
}
</style>