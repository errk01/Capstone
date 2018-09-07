<template>
    <div>
        <app-stock v-for= 'stock in stocks' :stock="stock" :key="stock.id">{{stocks}}</app-stock>
    </div>
</template>

<script>
   import Stock from './Stock.vue';
export default {
  name: 'stocks',
  components: {
    appStock: Stock
    
  },
  computed:{
    stocks(){
      return this.$store.getters.stocks;
    }
  }
}
</script>

<style>
</style>