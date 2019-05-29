<template>

    <div>
        <vs-list>
            <vs-list-item title="Publicação 1">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Publicação 2">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Publicação 3">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
            <vs-list-item title="Publicação 4">
              <vs-button v-show="isLogged" color="primary">Ação</vs-button>
            </vs-list-item>
        </vs-list>
    </div>
                          
</template>

<script>
    export default {
        name: 'PublicacoesList',

        components: {
        },

        computed: {
          isLogged() {
            return this.$store.state.isLogged
          }
        },
    }
</script>

<style>

</style>
