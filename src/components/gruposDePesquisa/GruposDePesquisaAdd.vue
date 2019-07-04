<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-button @click="() => this.$router.push({ path: '/grupos-de-pesquisa' })" color="gray">Voltar</vs-button>
                <div class="container text-left mt-4 mb-2">
                    <h1>Novo Grupo de Pesquisa</h1>
                </div>
            </vs-col>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <GruposDePesquisaForm :grupo_de_pesquisa="grupo_de_pesquisa" :cadastrarGrupoDePesquisa="cadastrarGrupoDePesquisa" />
                <p v-if="message">{{ message }}</p>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import SubMenu from '../common/SubMenu.vue'
import GruposDePesquisaForm from './GruposDePesquisaForm'

import grupoDePesquisaApi from '../../api/grupoDePesquisaApi.js'

    export default {
        name: 'GruposDePesquisaAdd',

        components: {
            NavBar,
            SubMenu,
            GruposDePesquisaForm
        },

        data() {
            return {
                grupo_de_pesquisa: {
                    name: ''
                },

                message: '',
            }
        },

        methods: {
            async cadastrarGrupoDePesquisa(grupo_de_pesquisa) {
                const response = await grupoDePesquisaApi.cadastrarGrupoDePesquisa(grupo_de_pesquisa);
                if (response.hasOwnProperty('name')) {
                    this.message = "Grupo de pesquisa cadastrado com sucesso!";
                } else {
                    this.message = "Preencha os campos corretamente!";
                }
            }
        },
    }
</script>

<style>

</style>