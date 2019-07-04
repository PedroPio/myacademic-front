<template>
    <div>
        <p v-if="edit">Editar Publicação</p>
        <vs-card>
            <vs-input v-model="publicacao.name" placeholder="Nome Publicacao"></vs-input>
            <vs-radio v-model="publicacao.type" vs-value="0">Conferência</vs-radio>
            <vs-radio v-model="publicacao.type" vs-value="1">Periódico</vs-radio>
            <vs-radio v-model="publicacao.type" vs-value="2">Resumo</vs-radio>
            <label>File
                <input type="file" @change="handleFileUpload">
            </label>
            <a v-if="publicacao.bibtex" v-bind:href="publicacao.bibtex">Arquivo Atual</a>
            <vs-button v-if="edit" @click="editarPublicacao(publicacao, publicacao.id)" color="green">Editar</vs-button>
            <vs-button v-else @click="cadastrarPublicacao(publicacao)" color="green">Cadastrar</vs-button>
        </vs-card>
    </div>
</template>

<script>
    export default {
        name: 'PublicacoesForm',

        components: {
            
        },

        props: {
            publicacao: {
                type: Object
            },

            edit: {
                type: Boolean
            },

            cadastrarPublicacao: {
                type: Function
            },

            editarPublicacao: {
                type: Function
            },
        },

        data() {
            // guarda o props como seu proprio dado, se o props for vazio significa cadastro
            // senao significa atualizacao
            return {
                publicacao: {
                    type: this.props.publicacao.type,
                    name: this.props.publicacao.name,
                    bibtex: this.props.bibtex
                },
                edit: this.props.edit
            }
        },

        methods: {
          handleFileUpload(e) {
              this.$emit('fileUpload', e.target.files[0]);
          } 
        },
    }
</script>

<style>

</style>