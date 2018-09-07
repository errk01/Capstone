<template>

 <div class="col s12 m4 p-5">
   <div class="card grey lighten-3">
  <div class="card-content">
   <h5 class="card-title"><b>{{stock.name}}</b></h5>
   <h5><small>Price: ${{stock.price}}</small></h5>
   <mid>Quantity: {{stock.quantity}}</mid>
    </div>
     <div class="card-body"> 
       
         <input type="number"
        class="form-control"
         placeholder="Quantity"
         v-model.number="quantity"
         :class="{danger:insufficientQuantity }"
        >
            </div>
         <div>
        <button 
        class="btn btn-success"
        @click="sellStock"
        :disabled = "isDisabled || insufficientQuantity"
        >{{insufficientQuantity ? 'Dont Have Enough' : 'Sell'}}</button>
    </div>
  </div>
  
  </div>

  
 
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PortfolioStock',
  props: ['stock'],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({ sellOne: 'sellStock' }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellOne(order);
      this.quantity = 0;
    }
  },
  computed: {
    isDisabled() {
      return this.quantity <= 0 || !Number.isInteger(this.quantity);
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  }
};
</script>

<style>
.danger {
  border: 2px solid red;
}
.col {
  margin-top: 65px;
}

</style>


