<template>
    <div>
        <NavBar />
        <SubMenu />
        <vs-row>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <div class="container text-left mt-4 mb-2">
                    <h1>Disciplinas</h1>
                </div>
            </vs-col>
            <vs-col vs-offset="2" v-tooltip="'col - 8'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-card>
                    <DisciplinasList />
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import DisciplinasList from './DisciplinasList.vue'
import SubMenu from '../common/SubMenu.vue'
    export default {
        name: 'Disciplinas',

        components: {
            NavBar,
            DisciplinasList,
            SubMenu,
        },
    }
</script>

<style>

</style>
