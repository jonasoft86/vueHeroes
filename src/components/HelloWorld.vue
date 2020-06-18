<template>
  <div class="container">
    <h1 class="title">Superhéroes</h1> 

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar" v-model="nombre">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>

    <button type="button" class="btn btn-primary btn-space" v-on:click="listarHeroes">Mostrar Todos</button>
    <button type="button" class="btn btn-primary btn-space" v-on:click="heroesVuelan">Vuelan</button>
    <button type="button" class="btn btn-primary btn-space" v-on:click="heroesId(1)">ID : 1</button>

    <div class="container py-3" li v-for="heroe in buscarHeroe" :key="heroe.id">
      <div class="card">
        <div class="row ">
          <div class="col-md-4">
              <img v-bind:src="heroe.avatarURL" class="w-100" width="300px" height="200px">
          </div>
          <div class="col-md-8 px-3">
            <div class="card-block px-3">
              <h4 class="card-title">{{heroe.nombre}}</h4>
              <p class="card-text">{{heroe.nombreReal}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      nombre: '',
      heroes: []
    }
  },
  methods: {
    listarHeroes(){
      this.axios.get('/superheroes')
        .then( res => {
          this.heroes = res.data.data;
          if(this.heroes.length==0)
          {
            this.$swal('No hay datos');
          }
        })
        .catch( e => {
          this.$swal('Error de servicios, Intente mas tarde');
          console.log(e)
        })
    },
    heroesVuelan(){
      this.axios.get('/superheroes')
        .then( respuesta => {
          this.heroes = respuesta.data.data.filter(h => h.puedeVolar);
          if(this.heroes.length==0)
          {
            this.$swal('No hay datos');
          }
        })
        .catch( e => {
          this.$swal('Error de servicios, Intente mas tarde');
          console.log(e)
        })
    },
    heroesId(id){
      this.heroes = [];
      this.axios.get('/superheroes/'+id)
        .then( res => {
          this.heroe = res.data.data;
          if(this.heroe)
          {
            this.heroes.push(this.heroe)
          }else{
            this.$swal('No existe ID');
          }
        })
        .catch( e => {
          this.$swal('Error de servicios, Intente mas tarde');
          console.log(e)
        })
    }
  },
  computed: {
    buscarHeroe: function() {
        return this.heroes.filter((h)=> h.nombre.includes(this.nombre));
    }
  },
  created(){
    this.listarHeroes();
  }
}

</script>

<style scoped>
.container {
  align-content: center;
}
.title {
  text-align: left;
}
.btn-space{
  margin-right: 10px;
}
</style>
