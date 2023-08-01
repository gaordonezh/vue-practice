<template>
  <h1>TYPESCRIPT {{ nombre }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

const Typescript = defineComponent({
  setup() {
    const nombre = ref<string>("Aldo");
    return { nombre };
  },
});

export default Typescript;
</script>
