<template>
    <div>
<h1 >Welcome to Stock Trader {{email}} </h1>
<!-- <p>welcome{{email}}</p> -->
<p class="wallet">Wallet: {{funds | currency}}</p>

<p>This site allowes you to buy and sell stocks. this gives you the option to view the stocks before you by them</p> <p>You can register to create a profile and user your email to log in. </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    email() {
         console.log('this is in the home page',this.$store);
      //  return this.$store.getters.user ? this.$store.state.store.user.authData.email : null
  },
   created() {
  this.$store.dispatch('fetchUsers')
  }
}
}
</script>

<style>
h1, p, .wallet{
  color: white;
}
</style>
