<template>
  <div>
    <h1>Directivas</h1>
    <hr />

    <span v-text="titulo"></span>
    <div v-html="html"></div>
    <hr />
    <h3>Tu edad es de {{ edad }}</h3>
    <h2 v-show="edad >= 18">Mayor de edad</h2>
    <h2 v-show="edad < 18">Menor de edad</h2>

    <h2 v-if="edad >= 18 && edad > 0 && edad < 100">Mayor de edad</h2>
    <h2 v-else-if="edad < 18 && edad > 0 && edad < 100">Menor de edad</h2>
    <h2 v-else>Edad inválida</h2>
    <button @click="add()">ADD</button>
    <button @click="dis()">SUBTRACT</button>
    <hr />

    <ul>
      <li v-for="(usuario, index) in usuarios" :key="index">
        {{ usuario }}
      </li>
    </ul>
    <hr />

    <div class="contador" @click="click()">Clicks {{ clicks }}</div>
    <hr />

    <img :src="url" />
  </div>
</template>

<script>
export default {
  data: () => ({
    titulo: "hola",
    html: "<h3>SOY UN H3</h3>",
    edad: 10,
    usuarios: ["Name 1", "name2", "name 3", "name 4", "name 5"],
    clicks: 0,
    url: "https://cdn.svgporn.com/logos/vue.svg?response-content-disposition=attachment%3Bfilename%3Dvue.svg",
  }),
  methods: {
    add() {
      this.edad++;
    },
    dis() {
      this.edad--;
    },
    click() {
      this.clicks++;
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
  margin: 0px 1rem;
}
.contador {
  background-color: tomato;
  color: snow;
  font-weight: bold;
  height: 400px;
  user-select: none;
}
</style>
