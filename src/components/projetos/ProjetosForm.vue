<template>
    <div>
        <p v-if="edit">Editar Projeto</p>
        <vs-card>
            <vs-input v-model="projeto.name" placeholder="Nome Projeto"></vs-input>
            <vs-input type="text" v-model="projeto.abstract" placeholder="Resumo"></vs-input>
            <vs-input type="date" v-model="projeto.year_beg" placeholder="Data inicial"></vs-input>
            <vs-input type="date" v-model="projeto.year_end" placeholder="Data final"></vs-input>

            <label>File
                <input type="file" @change="handleFileUpload">
            </label>
            <a v-if="projeto.paper" v-bind:href="projeto.paper">Arquivo Atual</a>
            <vs-button v-if="edit" @click="editarProjeto(projeto, projeto.id)" color="green">Editar</vs-button>
            <vs-button v-else @click="cadastrarProjeto(projeto)" color="green">Cadastrar</vs-button>
        </vs-card>
    </div>
</template>

<script>
    export default {
        name: 'ProjetosForm',

        components: {
            
        },

        props: {
            projeto: {
                type: Object
            },

            edit: {
                type: Boolean
            },

            cadastrarProjeto: {
                type: Function
            },

            editarProjeto: {
                type: Function
            },
        },

        data() {
            // guarda o props como seu proprio dado, se o props for vazio significa cadastro
            // senao significa atualizacao
            return {
                projeto: {
                    name: this.props.projeto.name,
                    abstract: this.props.abstract,
                    year_beg: this.props.year_beg,
                    year_end: this.props.year_end,
                    paper: this.props.paper,
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