<template>
  <div>
    <form @submit.prevent="$emit('infoMonedas', cripto, moneda)">
      <div>
        <label>
          Moneda nacional:
          <select required v-model="moneda">
            <option value="" disabled selected>Seleccione una moneda...</option>
            <option>MXN</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Criptomoneda:
          <select required v-model="cripto">
            <option value="" disabled selected>
              Seleccione una criptomoneda...
            </option>
            <option>BTC</option>
            <option>ETH</option>
            <option>LTC</option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Cotizar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    moneda: "",
    cripto: "",
  }),
};
</script>
