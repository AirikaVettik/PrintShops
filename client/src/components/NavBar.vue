<template>
  <div id="nav">
    <ul>
        <router-link id="navlink" to="/" >
            Eesti trükikojad
        </router-link>
        <router-link id="navlink" to="/newshop" >
            Lisa uus trükikoda
        </router-link>
        </ul>
    <hr />
  </div>
</template>

<script>

export default {
  name: "NavBar"
}

</script>

<style scoped>
#nav {
  padding-top: 70px;
  margin: auto;
}
hr {
  margin-top: 30px;
  width: 50%;
}
#navlink {
  margin: 10px;
}
</style>
