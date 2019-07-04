<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <div class="container text-left mt-4 mb-2">
                    <h1>Publicações</h1>
                </div>
            </vs-col>
            <vs-button @click="() => this.$router.push({ path: '/publicacoes/new' })" color="purple" type="filled">Adicionar</vs-button>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-card>
                    <PublicacoesList />
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import PublicacoesList from './PublicacoesList.vue'
import SubMenu from '../common/SubMenu.vue'
    export default {
        name: 'Publicacoes',

        components: {
            NavBar,
            PublicacoesList,
            SubMenu,
        },
    }
</script>

<style>

</style>
