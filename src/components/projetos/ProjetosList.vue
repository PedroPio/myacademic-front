<template>
    <div>
        <vs-list>
            <vs-list-item title="Projeto 1">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Projeto 2">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Projeto 3">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Projeto 4">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
        </vs-list>
    </div>
</template>

<script>
    export default {
        name: 'ProjetosList',

        components: {
        },

        computed: {
          isLogged() {
            return this.$store.state.isLogged
          }
        },
    }
</script>

<style>

</style>
