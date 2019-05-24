<template>
    <div>
        <NavBar />
        <ProjetosList />
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import ProjetosList from './ProjetosList.vue'
    export default {
        name: 'Projetos',

        components: {
            NavBar,
            ProjetosList
        },
    }
</script>

<style>

</style>