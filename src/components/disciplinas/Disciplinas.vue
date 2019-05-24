<template>
    <div>
        <NavBar />
        <DisciplinasList />
    </div>
</template>

<script>
import NavBar from '../common/NavBar.vue'
import DisciplinasList from './DisciplinasList.vue'
    export default {
        name: 'Disciplinas',

        components: {
            NavBar,
            DisciplinasList
        },
    }
</script>

<style>

</style>