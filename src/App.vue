<template>
  <div id="nav">
    <Navbar/>
    
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'Home',
  components: {
    //HelloWorld
    Navbar,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
