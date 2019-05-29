<template>
  <div class="login">
    <img src="../../../docs/assets/logo.jpeg" alt="Loading Icon">
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccessful">Login Successful</p>
    <form @submit.prevent="loginSubmit">
      <input type="email" placeholder="E-Mail" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <vs-button @click="login" color="green" type="filled">Entrar como professor</vs-button>
    </form>
    
    <span>Ou</span>
    <hr>
    <vs-button @click="visitante" color="purple" type="filled">Acessar como visitante</vs-button>
  </div>
</template>

<script>

export default {
   name: 'Login',

   components: {

   },

   methods: {
       login() {
           this.$router.push({ path: 'home' })
           // faz o isLogged ir para True executando a action Login
           // se o usuario recarregar a pagina com Enter ou Ctrl F5, os valores da store se perdem
           this.$store.dispatch('login')
       },

       visitante() {
         this.$router.push({path: 'home'})
       }
   }
};
</script>

<style>
  .login {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    .container-loading {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,.3);
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    form {
      display: flex;
      flex-flow: column;
      *:not(:last-child) {
        margin-bottom: 1rem;
      }
      input {
        padding: .5rem;
      }
      button {
        padding: .5rem;
        background-color: lightgray;
        border: 1px solid gray;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          background-color: lightslategray;
        }
      }
    }
  }
</style>