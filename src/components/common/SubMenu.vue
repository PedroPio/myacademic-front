<template>
    <div class="my-3">
        <vs-row> 
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-button @click="() => this.$router.push({ path: '/home' })" color="#646464" type="flat" icon="house"></vs-button>
            </vs-col> 
            <vs-col vs-offset="8" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
                <vs-button color="#646464" size="large" type="filled" icon="settings"></vs-button>
            </vs-col> 
        </vs-row> 
    </div>
</template>

<script>
    export default {
        name: 'SubMenu',
    }
</script>

<style>
</style>
