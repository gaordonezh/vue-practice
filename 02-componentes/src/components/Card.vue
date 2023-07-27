<template>
  <grid>
    <img :src="url" :alt="nombre" />
    <h2>{{ nombre }}</h2>
    <a :href="url" target="_blank">Descargar</a>
    <a :href="url" target="_blank">Visitar</a>
  </grid>
</template>

<script>
import Grid from "./Grid.vue";
export default {
  props: {
    url: {
      String,
    },
    nombre: {
      String,
    },
  },
  components: { Grid },
};
</script>

<style scoped>
img {
  height: 8rem;
  width: 8rem;
  padding: 0.5rem;
}
a {
  text-decoration: none;
  color: snow;
  background-color: #301675;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  border: 1px solid #f2f2f2;
}
</style>
