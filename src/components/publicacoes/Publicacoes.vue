<template>
    <div>
        <NavBar />
        <PublicacoesList />
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import PublicacoesList from './PublicacoesList.vue'
    export default {
        name: 'Publicacoes',

        components: {
            NavBar,
            PublicacoesList
        },
    }
</script>

<style>

</style>