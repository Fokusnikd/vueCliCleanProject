<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/houses">houses</router-link>|
      <router-link to="/houses/add">houseform</router-link>|
      <router-link to="/suppliers">Sup</router-link>|
      <router-link to="/suppliers/add">Supform</router-link>|
      <router-link to="/suppliers/edit/:userId">Edit</router-link>|
      <router-link to="/suppliers/:userId">SupHouses</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
