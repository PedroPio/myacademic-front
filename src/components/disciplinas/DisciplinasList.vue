<template>

    <div>
        
        <vs-list v-for="(disciplina, index) in disciplinas">
            <p v-if="message">{{ message }}</p>
            <vs-list-item :title="disciplina.name">
              <vs-button v-show="isLogged" color="primary" icon="edit"></vs-button>
              <vs-button v-show="isLogged" color="danger" icon="delete" @click="removerDisciplina(disciplina.pk, index)"></vs-button>
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
            },
            message: ''
          }
        },

        async mounted() {
          const response = await disciplinaApi.recuperarDisciplina();
          this.disciplinas = response;
        },
        methods: {
            async removerDisciplina(disciplina_id, index) {
                const response = await disciplinaApi.removerDisciplina(disciplina_id);
                if (response) {
                  this.message = "Falha ao remover disciplina";
                } else {
                  this.disciplinas.splice(index, 1);
                }
            }
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
