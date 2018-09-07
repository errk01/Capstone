<template>
    <div>
        <portfolio-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></portfolio-stock>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PortfolioStock from './PortfolioStock.vue';

export default {
 
  name: 'Portfolio',
  computed: {
    ...mapGetters({ stocks: 'stockPortfolio' })
  },
  components: {
    PortfolioStock
  },
}
</script>

 <style scoped >
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

button{
  text-decoration: none;
}
</style>;



