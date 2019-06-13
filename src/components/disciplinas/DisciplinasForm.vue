<template>
    <vs-card>
        <vs-input v-model="disciplina.name" placeholder="Nome Disciplina"></vs-input>
        <vs-radio v-model="disciplina.type" vs-value="0">Graduação</vs-radio>
        <vs-radio v-model="disciplina.type" vs-value="1">Pós-graduação</vs-radio>
        <vs-button @click="cadastrarDisciplina(disciplina)" color="green">Cadastrar</vs-button>
    </vs-card>
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

            cadastrarDisciplina: {
                type: Function
            }
        },

        data() {
            return {
                disciplina: {
                    type: this.props.disciplina.type,
                    name: this.props.disciplina.name
                },
            }
        },

        methods: {
            
        },
    }
</script>

<style>

</style>