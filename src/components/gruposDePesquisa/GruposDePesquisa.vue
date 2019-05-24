<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <div class="container text-left mt-4 mb-2">
                    <h1>Grupos de Pesquisa</h1>
                </div>
            </vs-col>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-card>
                    <GruposDePesquisaList />
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import GruposDePesquisaList from './GruposDePesquisaList.vue'
import SubMenu from '../common/SubMenu.vue'
    export default {
        name: 'GruposDePesquisa',

        components: {
            NavBar,
            GruposDePesquisaList,
            SubMenu,
        },
    }
</script>

<style>

</style>
