<template>
  <div>
    <div class="navbar">
        <SideBar/>
        <div slot="title">
            <vs-navbar-title>
                <span>My Academic Logo</span>
            </vs-navbar-title>
        </div>
    </div>
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

<style>
    .navbar {
        background-color: #646464;
    }
    .navbar button {
        background-color: #F6F6F6;
    }
</style>
