<script>
import Progressbar from "./Progressbar.vue";
import Table from "./Table.vue";
export default {
  components: { Progressbar, Table },
  data: () => ({
    proyecto: "",
    tipo: "",
    urgente: false,
    proyectos: [],
  }),
  methods: {
    registrarProyecto() {
      const newProject = {
        proyecto: this.proyecto,
        tipo: this.tipo,
        urgente: this.urgente,
        completado: false,
      };

      this.proyectos.push(newProject);
      this.proyecto = "";
      this.tipo = "";
      this.urgente = false;

      this.saveData();
    },
    cambiarEstado(index, key) {
      this.proyectos[index][key] = !this.proyectos[index][key];
      this.saveData();
    },
    limpiarData() {
      localStorage.removeItem("proyectos");
      this.proyectos = [];
    },
  },
  computed: {
    numeroProyectos() {
      return this.proyectos.length;
    },
    porcentaje() {
      const completed = this.proyectos.filter((item) => item.completado).length;
      const calculado = (completed * 100) / this.numeroProyectos || 0;
      return parseFloat(String(calculado)).toFixed(0);
    },
    saveData() {
      localStorage.setItem("proyectos", JSON.stringify(this.proyectos));
    },
  },
  mounted() {
    const data = localStorage.getItem("proyectos");
    this.proyectos = JSON.parse(data) || [];
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12 mb-4">
      <Progressbar :porcentaje="porcentaje" />
    </div>

    <div class="col-12 col-md-4">
      <form @submit.prevent="registrarProyecto">
        <div class="mb-3">
          <label class="form-label">Proyecto</label>
          <input
            v-model.trim="proyecto"
            type="text"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Actividad</label>
          <select v-model="tipo" class="form-select" required>
            <option disabled selected value="">Seleccione un tipo...</option>
            <option value="Aplicación web con Vue.js">
              Aplicación web con Vue.js
            </option>
            <option value="Backend con Node JS">Backend con Node JS</option>
            <option value="Aplicación mobile con React Native">
              Aplicación mobile con React Native
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-check-label">Urgente</label>
          <input v-model="urgente" type="checkbox" class="form-check-control" />
        </div>

        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>

    <div class="col-12 col-md-8">
      <Table
        :numeroProyectos="numeroProyectos"
        :proyectos="proyectos"
        :cambiarEstado="cambiarEstado"
        :limpiarData="limpiarData"
      />
    </div>
  </div>
</template>
