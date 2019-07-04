<template>

    <div>
        <div v-if="edit">
          <DisciplinasForm :edit="edit" :disciplina="disciplinas[index]" :editarDisciplina="editarDisciplina"/>
          <vs-button color="gray" @click="voltar()">Voltar</vs-button>
          <p v-if="message">{{ message }}</p>
        </div>
        <div v-else>
          <vs-list v-for="(disciplina, index) in disciplinas">
              <p v-if="message">{{ message }}</p>
              <vs-list-item :title="disciplina.type == 0 ? disciplina.name + ' - ' + 'Graduação' : disciplina.name + ' - ' + 'Pós-Graduação'">
                <vs-button v-show="isLogged" color="primary" icon="edit" @click="editar(index)"></vs-button>
                <vs-button v-show="isLogged" color="danger" icon="delete" @click="removerDisciplina(disciplina.pk, index)"></vs-button>
              </vs-list-item>
          </vs-list>
        </div>
    </div>
                          
</template>

<script>
import disciplinaApi from '../../api/disciplinaApi.js'
import DisciplinasForm from './DisciplinasForm'

    export default {
        name: 'DisciplinasList',

        components: {
          DisciplinasForm
        },

        data() {
          return {
            disciplinas: {
              type: '',
              name: ''
            },
            message: '',
            edit: false,
            index: ''
          }
        },

        async mounted() {
          const response = await disciplinaApi.recuperarDisciplina();
          this.disciplinas = response;
        },

        methods: {
            editar(index) {
              this.edit = true;
              this.index = index;
              this.message = '';
            },

            voltar() {
              this.edit = false;
              this.message = '';
            },

            async removerDisciplina(disciplina_id, index) {
                const response = await disciplinaApi.removerDisciplina(disciplina_id);
                if (response) {
                  this.message = "Falha ao remover disciplina";
                } else {
                  this.disciplinas.splice(index, 1);
                }
            },

            async editarDisciplina(disciplina, disciplina_id) {
              const response = await disciplinaApi.editarDisciplina(disciplina, disciplina_id);
                if (response.hasOwnProperty('name')) {
                  this.disciplinas[this.index] = response;
                  this.edit = false;
                } else {
                  this.message = "Falha ao editar disciplina";
                }
            },
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
