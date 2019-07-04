<template>
    <div>
        <p v-if="edit">Editar Disciplina</p>
        <vs-card>
            <vs-input v-model="disciplina.name" placeholder="Nome Disciplina"></vs-input>
            <vs-radio v-model="disciplina.type" vs-value="0">Graduação</vs-radio>
            <vs-radio v-model="disciplina.type" vs-value="1">Pós-graduação</vs-radio>
            <vs-button v-if="edit" @click="editarDisciplina(disciplina, disciplina.pk)" color="green">Editar</vs-button>
            <vs-button v-else @click="cadastrarDisciplina(disciplina)" color="green">Cadastrar</vs-button>
        </vs-card>
    </div>
</template>

<script>
    export default {
        name: 'DisciplinasForm',

        components: {
            
        },

        props: {
            disciplina: {
                type: Object
            },

            edit: {
                type: Boolean
            },

            cadastrarDisciplina: {
                type: Function
            },

            editarDisciplina: {
                type: Function
            }
        },

        data() {
            // guarda o props como seu proprio dado, se o props for vazio significa cadastro
            // senao significa atualizacao
            return {
                disciplina: {
                    type: this.props.disciplina.type,
                    name: this.props.disciplina.name
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