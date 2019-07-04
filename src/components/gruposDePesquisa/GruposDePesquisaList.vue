<template>

    <div>
        <div v-if="edit">
          <GruposDePesquisaForm :edit="edit" :grupo_de_pesquisa="grupos_de_pesquisa[index]" :editarGrupoDePesquisa="editarGrupoDePesquisa"/>
          <vs-button color="gray" @click="voltar()">Voltar</vs-button>
          <p v-if="message">{{ message }}</p>
        </div>
        <div v-else>
          <vs-list v-for="(grupo_de_pesquisa, index) in grupos_de_pesquisa">
              <p v-if="message">{{ message }}</p>
              <vs-list-item :title="grupo_de_pesquisa.name">
                <vs-button v-show="isLogged" color="primary" icon="edit" @click="editar(index)"></vs-button>
                <vs-button v-show="isLogged" color="danger" icon="delete" @click="removerGrupoDePesquisa(grupo_de_pesquisa.id, index)"></vs-button>
              </vs-list-item>
          </vs-list>
        </div>
    </div>
                          
</template>

<script>
import grupoDePesquisaApi from '../../api/grupoDePesquisaApi.js'
import GruposDePesquisaForm from './GruposDePesquisaForm'

    export default {
        name: 'GrupoDePesquisaList',

        components: {
          GruposDePesquisaForm
        },

        data() {
          return {
            grupos_de_pesquisa: {
              name: ''
            },
            message: '',
            edit: false,
            index: ''
          }
        },

        async mounted() {
          const response = await grupoDePesquisaApi.recuperarGrupoDePesquisa();
          this.grupos_de_pesquisa = response;
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

            async removerGrupoDePesquisa(grupo_de_pesquisa_id, index) {
                const response = await grupoDePesquisaApi.removerGrupoDePesquisa(grupo_de_pesquisa_id);
                if (response) {
                  this.message = "Falha ao remover o Grupo de Pesquisa";
                } else {
                  this.grupos_de_pesquisa.splice(index, 1);
                }
            },

            async editarGrupoDePesquisa(grupo_de_pesquisa, grupo_de_pesquisa_id) {
              const response = await grupoDePesquisaApi.editarGrupoDePesquisa(grupo_de_pesquisa, grupo_de_pesquisa_id);
                if (response.hasOwnProperty('name')) {
                  this.grupos_de_pesquisa[this.index] = response;
                  this.edit = false;
                } else {
                  this.message = "Falha ao editar o Grupo de Pesquisa";
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
