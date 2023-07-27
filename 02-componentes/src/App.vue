<template>
  <div>
    <h1>COMPONENTES</h1>
    <hr />
    <card
      url="https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg"
      nombre="Vue"
    />

    <card
      url="https://cdn.svgporn.com/logos/vuetifyjs.svg?response-content-disposition=attachment%3Bfilename%3Dvuetifyjs.svg"
      nombre="Vuetify"
    />

    <card
      url="https://cdn.svgporn.com/logos/angular-icon.svg?response-content-disposition=attachment%3Bfilename%3Dangular-icon.svg"
      nombre="Angular"
    />

    <card
      url="https://cdn.svgporn.com/logos/react.svg?response-content-disposition=attachment%3Bfilename%3Dreact.svg"
      nombre="React"
    />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  components: { Card },
};
</script>
