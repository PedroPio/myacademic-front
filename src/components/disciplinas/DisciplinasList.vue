<template>

    <div>
        <vs-list>
            <vs-list-item title="Disciplina 1">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Disciplina 2">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Disciplina 3">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Disciplina 4">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
        </vs-list>
    </div>
                          
</template>

<script>
    export default {
        name: 'DisciplinasList',

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
