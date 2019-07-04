<template>
    <div>
        <vs-list>
            <vs-list-item title="Aluno 1">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Aluno 2">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Aluno 3">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Aluno 4">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
        </vs-list>
    </div>
</template>

<script>
    export default {
        name: 'AlunosList',

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
