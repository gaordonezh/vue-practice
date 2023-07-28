<template>
  <div class="container">
    <h1>Cotizador de criptomonedas</h1>
    <grid>
      <formulario @info-monedas="obtener" />
      <Data
        :cripto="info.cripto"
        :moneda="info.moneda"
        :img="info.img"
        :precio="info.precio"
      />
    </grid>
  </div>
</template>

<script>
import Data from "./components/Data.vue";
import Formulario from "./components/Formulario.vue";
import Grid from "./components/Grid.vue";

export default {
  components: { Formulario, Data, Grid },
  data: () => ({
    info: {
      cripto: "",
      moneda: "",
      img: "/media/37746251/btc.png",
      precio: "0",
    },
  }),
  methods: {
    async obtener(cripto, moneda) {
      console.log("here");
      const res = await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${encodeURI(
          cripto
        )}&tsyms=${encodeURI(moneda)}`
      );
      const { RAW } = await res.json();

      const dataCripto = RAW[cripto];
      const data = dataCripto[moneda];

      this.info = {
        cripto: cripto,
        moneda: moneda,
        img: data.IMAGEURL,
        precio: data.PRICE,
      };
    },
  },
};
</script>
