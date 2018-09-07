<template>
<div >
<nav class=" color grey darken-1 z-depth-5">
  
  <div class="nav-wrapper ">
    <router-link v-if='auth' to="/" class="brand-logo ">Stock Trader</router-link>
   <!-- <a v-on:click="show = !show" href="">Save & Load</a> -->
   
    <ul class="right hide-on-med-and-down">
      <router-link v-if='auth' to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
      <router-link v-if='auth' to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      <router-link v-if="!auth" to="/login" activeClass="active" tag="li"><a>Login</a></router-link>
      <router-link v-if="!auth" to="/register" activeClass="active" tag="li"><a>Register</a></router-link>
      <li v-if='auth'><a href="#" @click="endDay">End Day</a ></li>
       <li><a v-if='auth' v-on:click="show = !show" >Save & Load</a></li>
      <strong v-if='auth' class=" nav-text right">Funds: {{funds | currency}}</strong>

      <li>
        <a v-if='auth' @click="onLogout" class="button puls">Logout</a>
      </li>
    </ul>
      
  </div>
</nav>
<div>
<!-- <a v-if='auth' v-on:click="show = !show" tag="li">Save & Load</a> -->
<transition name="fade" v-if="show" >
        <div class="boxB">
            <a @click.prevent="saveData"  href="" class=" btn1 blue-text text-darken-2">Save</a>
            <a @click.prevent="loadData"  href="" class=" btn1 blue-text text-darken-2">Load</a>
            </div>
      </transition>
      </div>
 
</div>
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
  name: 'customHeader',
  data() {
    return {
      show: false,
      items: ['Save', 'Load'],
      isOpen: false
    };
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    onLogout() {
      this.$store.dispatch('logout');
    },
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stock: this.stock
      };
      this.$store.dispatch('saveData', data);
    },
    loadData() {
      this.fetchData();
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    auth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style >
.nav-wrapper {
  margin: 5px;
  width: 1100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.btn1{
  width: 2px;
    border: 5px solid green;
    margin: 2px;
}
</style>;