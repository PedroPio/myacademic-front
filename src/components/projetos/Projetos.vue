<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <div class="container text-left mt-4 mb-2">
                    <h1>Projetos</h1>
                </div>
            </vs-col>
            <vs-button @click="() => this.$router.push({ path: '/projetos/new' })" color="purple" type="filled">Adicionar</vs-button>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-card>
                    <ProjetosList />
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import ProjetosList from './ProjetosList.vue'
import SubMenu from '../common/SubMenu.vue'
    export default {
        name: 'Projetos',

        components: {
            NavBar,
            ProjetosList,
            SubMenu,
        },
    }
</script>

<style>

</style>
