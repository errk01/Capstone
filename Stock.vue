<template>
 
 <div class="col s12 m4">
   <div class="card grey lighten-3">
  <div class="card-content">
   <h5 class="card-title"><b>{{stock.name}}</b></h5>
   <h5><small>Price: ${{stock.price}}</small></h5>
    </div>
     <div class="card-body"> 
         <input type="number"
        class="form-control"
         placeholder="Quantity"
         v-model.number="quantity"
         :class="{danger: insufficient}"
        >
   </div>
         <div>
        <button 
        class="btn btn-success"
        @click="buyStock"
        :disabled = "isDisabled || insufficient"
        >{{insufficient ? 'Insufficient funds' : 'Buy'}}</button>
    </div>
    </div>
    </div>

 


   
</template>

<script>
export default {
  name: 'stocks',
  props: ['stock'],
  data() {
    return{
    quantity: 0
    }
  },
  methods:{
    buyStock(){
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
      
    }
  },
  computed:{
    funds(){
    return this.$store.getters.funds
  },
   insufficient() {
      return this.quantity * this.stock.price > this.funds
  },
  isDisabled() {
    return (this.quantity <= 0 || !Number.isInteger(this.quantity)) 
   }
  
}
}
</script>

<style scoped>
.danger{
  border: 3px solid red;
}
.col{
  
  margin-top:5px;
}

</style>
