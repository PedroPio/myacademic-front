<template>

    <div>
        <div v-if="edit">
          <PublicacoesForm :edit="edit" :publicacao="publicacoes[index]" :editarPublicacao="editarPublicacao" @fileUpload="fileUploadChild" />
          <vs-button color="gray" @click="voltar()">Voltar</vs-button>
          <p v-if="message">{{ message }}</p>
        </div>
        <div v-else>
          <vs-list v-for="(publicacao, index) in publicacoes">
              <p v-if="message">{{ message }}</p>
              <vs-list-item :title="publicacao.name">
                <vs-button v-show="isLogged" color="primary" icon="edit" @click="editar(index)"></vs-button>
                <vs-button v-show="isLogged" color="danger" icon="delete" @click="removerPublicacao(publicacao.id, index)"></vs-button>
              </vs-list-item>
              <img :src="publicacao.bibtex" />
          </vs-list>
        </div>
    </div>
                          
</template>

<script>
import publicacaoApi from '../../api/publicacaoApi.js'
import PublicacoesForm from './PublicacoesForm'

    export default {
        name: 'PublicacoesList',

        components: {
          PublicacoesForm
        },

        data() {
          return {
            publicacoes: {
              type: '',
              name: '',
              bibtex: '',
            },
            message: '',
            edit: false,
            index: ''
          }
        },

        async mounted() {
          const response = await publicacaoApi.recuperarPublicacao();
          this.publicacoes = response;
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

            async removerPublicacao(publicacao_id, index) {
                const response = await publicacaoApi.removerPublicacao(publicacao_id);
                if (response) {
                  this.message = "Falha ao remover publicacao";
                } else {
                  this.publicacoes.splice(index, 1);
                }
            },

            async editarPublicacao(publicacao, publicacao_id) {
              const response = await publicacaoApi.editarPublicacao(publicacao, publicacao_id);
                if (response.hasOwnProperty('name')) {
                  this.publicacoes[this.index] = response;
                  this.edit = false;
                } else {
                  this.message = "Falha ao editar publicacao";
                }
            },

            fileUploadChild(file) {
              this.publicacoes[this.index].bibtex = file;
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
