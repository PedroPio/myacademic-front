<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
        <div slot="title">
            <SideBar/>
            <vs-navbar-title>
                My Academic
            </vs-navbar-title>
        </div>
    </vs-navbar>
  </div>
</template>

<script>
import SideBar from './SideBar.vue'
    export default {
        name: 'NavBar',

        components: {
            SideBar,
        },
        data:()=>({
            activeItem: 0
        })
    }
</script>
