<template>
    <div>
        <div v-if="edit">
          <ProjetosForm :edit="edit" :projeto="projetos[index]" :editarProjeto="editarProjeto" @fileUpload="fileUploadChild" />
          <p v-if="message">{{ message }}</p>
        </div>
        <div v-else>
          <vs-list v-for="(projeto, index) in projetos">
              <p v-if="message">{{ message }}</p>
              <vs-list-item :title="projeto.name">
                <vs-button v-show="isLogged" color="primary" icon="edit" @click="editar(index)"></vs-button>
                <vs-button v-show="isLogged" color="danger" icon="delete" @click="removerProjeto(projeto.id, index)"></vs-button>
              </vs-list-item>
          </vs-list>
        </div>
    </div>
</template>

<script>
import projetoApi from '../../api/projetoApi.js'
import ProjetosForm from './ProjetosForm'

    export default {
        name: 'ProjetosList',

        components: {
          ProjetosForm
        },

        data() {
          return {
            projetos: {
              name: '',
              abstract: '',
              year_beg: '',
			  year_end: '',
			  paper: '',
            },
            message: '',
            edit: false,
            index: ''
          }
        },

        async mounted() {
          const response = await projetoApi.recuperarProjeto();
          this.projetos = response;
        },

        methods: {
            editar(index) {
              this.edit = true;
              this.index = index;
            },

            async removerProjeto(projeto_id, index) {
                const response = await projetoApi.removerProjeto(projeto_id);
                if (response) {
                  this.message = "Falha ao remover projeto";
                } else {
                  this.projetos.splice(index, 1);
                }
            },

            async editarProjeto(projeto, projeto_id) {
              const response = await projetoApi.editarProjeto(projeto, projeto_id);
                if (response.hasOwnProperty('name')) {
                  this.projetos[this.index] = response;
                  this.edit = false;
                } else {
                  this.message = "Falha ao editar projeto";
                }
            },

            fileUploadChild(file) {
              this.projetos[this.index].paper = file;
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
