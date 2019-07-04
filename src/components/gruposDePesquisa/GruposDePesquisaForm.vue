<template>
    <div>
        <p v-if="edit">Editar Grupo de Estudo</p>
        <vs-card>
            <vs-input v-model="grupo_de_pesquisa.name" placeholder="Nome grupo_de_pesquisa"></vs-input>
            <vs-button v-if="edit" @click="editarGrupoDePesquisa(grupo_de_pesquisa, grupo_de_pesquisa.id)" color="green">Editar</vs-button>
            <vs-button v-else @click="cadastrarGrupoDePesquisa(grupo_de_pesquisa)" color="green">Cadastrar</vs-button>
        </vs-card>
    </div>
</template>

<script>
    export default {
        name: 'GruposDePesquisaForm',

        components: {
            
        },

        props: {
            grupo_de_pesquisa: {
                type: Object
            },

            edit: {
                type: Boolean
            },

            cadastrarGrupoDePesquisa: {
                type: Function
            },

            editarGrupoDePesquisa: {
                type: Function
            }
        },

        data() {
            // guarda o props como seu proprio dado, se o props for vazio significa cadastro
            // senao significa atualizacao
            return {
                grupo_de_pesquisa: {
                    name: this.props.grupo_de_pesquisa.name
                },
                edit: this.props.edit
            }
        },

        methods: {
            
        },
    }
</script>

<style>

</style>