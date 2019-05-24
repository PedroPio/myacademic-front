<template lang="html">

      <div id="parentx">
        <vs-button @click="active=!active" size="large" color="light" type="flat" icon="menu"></vs-button>
        <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

          <div class="header-sidebar" slot="header">
            <vs-row vs-w="12">
                <vs-col :key="index" v-for="col,index in 1" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                    <vs-button icon="settings" color="#646464" type="flat"></vs-button>
                </vs-col>
            </vs-row>
            <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

            <h4>
              Prof. Fulano
            </h4>
            <vs-button color="danger" type="filled">Logout</vs-button>

          </div>
          <div class="sidebar-body">
              <vs-sidebar-item index="1" icon="person">
                <router-link class="nav-link" to="/alunos">Alunos</router-link>
              </vs-sidebar-item>

              <vs-sidebar-item index="2" icon="book">
                <router-link class="nav-link" to="/disciplinas">Disciplinas</router-link>
              </vs-sidebar-item>

              <vs-sidebar-item index="3" icon="group">
                <router-link class="nav-link" to="/grupo-pesquisa">Grupo de Pesquisa</router-link>
              </vs-sidebar-item>

              <vs-sidebar-item index="4" icon="work">
                <router-link class="nav-link" to="/projetos">Projetos</router-link>
              </vs-sidebar-item>
              <vs-sidebar-item index="5" icon="unarchive">
                <router-link class="nav-link" to="/publicacoes">Publicações</router-link>
              </vs-sidebar-item>
          </div>

          <div class="footer-sidebar" slot="footer">
              <vs-row>
                  <vs-col vs-offset="4" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                    <img src="../../../docs/assets/logo.jpeg"/>
                  </vs-col>
              </vs-row>
          </div>

        </vs-sidebar>
      </div>

    </template>

    <script>
    export default {
        name: 'SideBar',
          data:()=>({
                  active:false,
                })
    }
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
   display flex
   align-items center
   justify-content center
   width 100%
   > button
    margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
   border 0px solid rgba(0,0,0,0) !important
   border-left 1px solid rgba(0,0,0,.07) !important
   border-radius 0px !important
img
   width 100% 
</style>
