<template>
  <main>
    <Navbar />
    <RouterView />
  </main>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: { RouterView, RouterLink, Navbar },
};
</script>
