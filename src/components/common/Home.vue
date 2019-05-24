<template>
    <div>
        <NavBar />
        <b-container class="pt-3">
            <b-row>
                <b-col>
                    <b-row>
                          <b-col>
                              <h2>Ultimas Disciplinas</h2>
                              <DisciplinasList />
                          </b-col>
                    </b-row>

                    <b-row class="pt-3">
                        <b-col>
                            <h2>Ultimas Publicações</h2>
                            <PublicacoesList />
                        </b-col>
                    </b-row>
                </b-col>

                <b-col>
                    <h2>Ultimos Projetos</h2>
                    <ProjetosList />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import DisciplinasList from '../disciplinas/DisciplinasList.vue'
import ProjetosList from '../projetos/ProjetosList.vue'
import PublicacoesList from '../publicacoes/PublicacoesList.vue'
    export default {
        name: 'Home',

        components: {
            NavBar,
            DisciplinasList,
            ProjetosList,
            PublicacoesList
        },
        data:()=>({
            activeItem: 0
        })
    }
</script>

<style>

</style>