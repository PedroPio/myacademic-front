<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <div class="container text-left mt-4 mb-2">
                    <h1>Novo Projeto</h1>
                </div>
            </vs-col>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <ProjetosForm :projeto="projeto" :cadastrarProjeto="cadastrarProjeto" @fileUpload="fileUploadChild" />
                <p v-if="message">{{ message }}</p>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import SubMenu from '../common/SubMenu.vue'
import ProjetosForm from './ProjetosForm'

import projetoApi from '../../api/projetoApi.js'

    export default {
        name: 'ProjetosAdd',

        components: {
            NavBar,
            SubMenu,
            ProjetosForm
        },

        data() {
            return {
                projeto: {
                    name: '',
                    abstract: '',
                    year_beg: '',
                    year_end: '',
                    paper: '',
                },

                message: '',
            }
        },

        methods: {
            async cadastrarProjeto(projeto) {
                const response = await projetoApi.cadastrarProjeto(projeto);
                if (response.hasOwnProperty('name')) {
                    this.message = "Publicação cadastrada com sucesso!";
                } else {
                    this.message = "Preencha os campos corretamente!";
                }
            },

            fileUploadChild(file) {
              this.projeto.paper = file;
            }

        },
    }
</script>

<style>

</style>