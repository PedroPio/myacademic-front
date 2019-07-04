import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/common/Home.vue'
import Login from './components/common/Login.vue'
import Alunos from './components/alunos/Alunos.vue'

import Disciplinas from './components/disciplinas/Disciplinas.vue'
import DisciplinasAdd from './components/disciplinas/DisciplinasAdd.vue'

import GruposDePesquisa from './components/gruposDePesquisa/GruposDePesquisa.vue'
import GruposDePesquisaAdd from './components/gruposDePesquisa/GruposDePesquisaAdd.vue'

import Projetos from './components/projetos/Projetos.vue'
import ProjetosAdd from './components/projetos/ProjetosAdd.vue'

import Publicacoes from './components/publicacoes/Publicacoes.vue'
import PublicacoesAdd from './components/publicacoes/PublicacoesAdd.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    
    { path: '/alunos', component: Alunos },

    { path: '/disciplinas', component: Disciplinas },
    { path: '/disciplinas/new', component: DisciplinasAdd },

    { path: '/grupos-de-pesquisa', component: GruposDePesquisa },
    { path: '/grupos-de-pesquisa/new', component: GruposDePesquisaAdd},

    { path: '/projetos', component: Projetos },
    { path: '/projetos/new', component: ProjetosAdd },

    { path: '/publicacoes', component: Publicacoes },
    { path: '/publicacoes/new', component: PublicacoesAdd},
  ]
})
