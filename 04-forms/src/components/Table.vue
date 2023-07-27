<template>
  <div>
    <div class="row">
      <div class="col-6">
        <h3>{{ numeroProyectos }} proyectos</h3>
      </div>
      <div class="col-6 text-end">
        <button class="btn btn-warning" @click="limpiarData()">
          Limpiar proyectos
        </button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Proyecto</th>
            <th>Tipo</th>
            <th>Urgente</th>
            <th>Completado</th>
          </tr>
        </thead>
        <caption class="text-center" v-show="!numeroProyectos">
          No hay proyectos registrados
        </caption>
        <tbody v-show="numeroProyectos">
          <tr v-for="(item, index) in proyectos" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.proyecto }}</td>
            <td>{{ item.tipo }}</td>
            <td
              :class="item.urgente ? 'bg-success' : 'bg-danger'"
              @click="cambiarEstado(index, 'urgente')"
            >
              {{ item.urgente ? "SI" : "NO" }}
            </td>
            <td
              :class="item.completado ? 'bg-success' : 'bg-danger'"
              @click="cambiarEstado(index, 'completado')"
            >
              {{ item.completado ? "Completo" : "Incompleto" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["numeroProyectos", "proyectos", "cambiarEstado", "limpiarData"],
};
</script>
