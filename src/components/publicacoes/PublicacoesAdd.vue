<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-button @click="() => this.$router.push({ path: '/publicacoes' })" color="gray">Voltar</vs-button>
                <div class="container text-left mt-4 mb-2">
                    <h1>Nova Publicação</h1>
                </div>
            </vs-col>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <PublicacoesForm :publicacao="publicacao" :cadastrarPublicacao="cadastrarPublicacao" @fileUpload="fileUploadChild" />
                <p v-if="message">{{ message }}</p>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import SubMenu from '../common/SubMenu.vue'
import PublicacoesForm from './PublicacoesForm'

import publicacaoApi from '../../api/publicacaoApi.js'

    export default {
        name: 'PublicacoesAdd',

        components: {
            NavBar,
            SubMenu,
            PublicacoesForm
        },

        data() {
            return {
                publicacao: {
                    type: '',
                    name: '',
                    bibtex: ''
                },

                message: '',
            }
        },

        methods: {
            async cadastrarPublicacao(publicacao) {
                const response = await publicacaoApi.cadastrarPublicacao(publicacao);
                if (response.hasOwnProperty('name')) {
                    this.message = "Publicação cadastrada com sucesso!";
                } else {
                    this.message = "Preencha os campos corretamente!";
                }
            },

            fileUploadChild(file) {
              this.publicacao.bibtex = file;
            }

        },
    }
</script>

<style>

</style>