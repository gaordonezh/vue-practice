<script>
export default {
  data: () => ({
    contador: 20,
  }),
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    },
    reset() {
      this.contador = 10;
    },
  },
};
</script>

<template>
  <div class="container">
    <img src="./assets/logo.svg" alt="logo vue" height="100" />
    <small>
      <h1>HOLA MUNDO</h1>
    </small>
    <hr />
    <h2>Contador: {{ contador }}</h2>
    <button @click="incrementar()">+1</button>
    <button @click="decrementar()">-1</button>
    <button @click="reset()">Reset</button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  background-color: #ddd;
}

small {
  color: #666;
}

h1 {
  color: red;
  font-weight: bolder;
}

h2 {
  font-size: 2.5rem;
}

button {
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 6px;
  padding: 5px 15px;
  border-radius: 6px;
  border: none;
}
</style>
