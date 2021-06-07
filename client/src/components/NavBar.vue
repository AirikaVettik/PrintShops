<template>
  <div id="nav">
    <ul>
        <router-link id="navlink" to="/" >
            EESTI TRÜKIKOJAD
        </router-link>
        <router-link id="navlink" to="/newshop" >
            LISA UUS TRÜKIKODA
        </router-link>
    <hr />
    </ul>
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
  width: 100%;
}
#navlink {
  margin: 10px;
}
</style>
