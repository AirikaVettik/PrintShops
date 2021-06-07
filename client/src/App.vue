<template>
<b-container>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills>
      <NavBar />
      </b-nav>
    </b-card-header>

    <b-card-body>
      <router-view/>
    </b-card-body>
  </b-card>
  
</b-container>
</template>

<script>
import NavBar from "./components/NavBar.vue"

  export default {
      components: {
        NavBar
      }
    }
  
</script>