<template>
    <div>
        <vs-list>
            <vs-list-item title="Grupo 1">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Grupo 2">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Grupo 3">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Grupo 4">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
        </vs-list>
    </div>
</template>

<script>
    export default {
        name: 'GruposDePesquisaList',

        components: {
        },

        computed: {
          isLogged() {
            // return this.$store.state.isLogged
            if (localStorage.getItem('token')) {
              return true;
            }
          }
        },
    }
</script>

<style>

</style>
