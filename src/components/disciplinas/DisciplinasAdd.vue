<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <div class="container text-left mt-4 mb-2">
                    <h1>Nova Disciplina</h1>
                </div>
            </vs-col>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-card>
                    <vs-input v-model="disciplina.name" placeholder="Nome Disciplina"></vs-input>
                    <vs-radio v-model="disciplina.type" vs-value="0">Graduação</vs-radio>
                    <vs-radio v-model="disciplina.type" vs-value="1">Pós-graduação</vs-radio>
                    <p v-if="message">{{ message }}</p>
                    <vs-button @click="cadastrarDisciplina" color="green">Cadastrar</vs-button>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import SubMenu from '../common/SubMenu.vue'
import disciplinaApi from '../../api/disciplinaApi.js'

    export default {
        name: 'DisciplinasAdd',

        components: {
            NavBar,
            SubMenu,
        },

        data() {
            return {
                disciplina: {
                    type: '',
                    name: ''
                },

                message: '',
            }
        },

        methods: {
            async cadastrarDisciplina() {
                const response = await disciplinaApi.cadastrarDisciplina(this.disciplina);
                if (response.hasOwnProperty('name')) {
                    this.message = "Disiplina cadastrada com sucesso!";
                } else {
                    this.message = "Preencha os campos corretamente!";
                }
            }
        },
    }
</script>

<style>

</style>