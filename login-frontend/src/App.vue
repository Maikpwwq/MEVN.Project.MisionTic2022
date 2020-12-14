<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <router-link to="/dashboard">Dashboard</router-link> 
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon">
          </span>
        </button>
      </div >
    </nav >
    <!--  Aqui se muestra la vista de la ruta  -->      
    <router-view/>
  </div >
</template>

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
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
