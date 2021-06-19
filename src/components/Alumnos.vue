<template>
  <section class="src-componentes-alumnos">
    <div class="jumbotron p-3">
      <h1>Alumnos</h1>
      <hr />

      <button class="btn btn-success mb-3 me-3" @click="getPostsAxiosAsync()">
        Traer con Axios Async
      </button>
      <button class="btn btn-warning mb-3 me-3" @click="getPostsAxiosTC()">
        Traer con Axios Then Catch
      </button>

      <table class="table">
        <tr class="bg-dark text-white">
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
        </tr>

        <tr class="bg-table" v-for="(alumno, index) in alumnos" :key="index">
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.email }}</td>
          <td>{{ alumno.edad }}</td>
        </tr>
      </table>
      <hr />
      <h4 v-if="alumnos.length > 0" class="alert alert-warning">
        Cantidad de alumnos encontrados: {{ alumnos.length }}
      </h4>
      <h4 v-else class="alert alert-warning">No hay alumnos cargados</h4>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-alumnos',
    props: [],
    mounted () {

    },
    data () {
      return {
        alumnos:[],
        urlAxios:'https://60ad2d839e2d6b0017459278.mockapi.io/tp4/alumnos',
      }
    },
    methods: {
      getPostsAxiosTC(){
        this.axios(this.urlAxios)
        .then( (respuesta) => {
          console.log('AXIOS',respuesta.data)
          this.alumnos = respuesta.data
        })
        .catch((err) => console.error("Error en AXIOS: ", err.message))
      },
      async getPostsAxiosAsync(){
        try{
          const respuesta = await this.axios(this.urlAxios)
          this.alumnos = respuesta.data
        } catch(err){
          console.error('ERROR en AXIOS: ', err.message)
        }
        
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-componentes-alumnos {
}
.jumbotron {
  background-color: rgb(149, 214, 181);
}

.bg-table {
  background-color: burlywood !important;
}
</style>
