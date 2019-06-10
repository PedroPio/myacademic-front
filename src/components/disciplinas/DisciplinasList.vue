<template>

    <div>
        <vs-list v-for="disciplina in disciplinas">
            <vs-list-item :title=disciplina.name>
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
        </vs-list>
    </div>
                          
</template>

<script>
import disciplinaApi from '../../api/disciplinaApi.js'
    export default {
        name: 'DisciplinasList',

        components: {
        },

        data() {
          return {
            disciplinas: {
              type: '',
              name: ''
            }
          }
        },

        async mounted() {
          const response = await disciplinaApi.recuperarDisciplina();
          this.disciplinas = response;
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
