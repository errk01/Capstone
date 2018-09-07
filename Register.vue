<template>
<div class="container">
      <div class="col s12">
          </div>
        <form class="box" @submit.prevent="onSubmit">
          <label class="black-text text-darken-2"><h1> Register </h1></label>
      <div class="row">
        <div class="input-field">
          <label class="black-text text-darken-2" for="first_name">First Name</label>
          <input  id="first_name" type="text" class="validate " v-model="firstName">
        </div>
        <div class="input-field">
          <label class="black-text text-darken-2" for="last_name">Last Name</label>
          <input id="last_name" type="text" class="validate" v-model="lastName">
        </div>
      </div>
       <div class="row">  
        <div class="input-field">
          <label class="black-text text-darken-2" data-error="Invalid" data-success="Valid" for="email">Email: </label>
          <input id="email" type="email" class="validate" v-model="email">
        </div>
      </div>
      <div class="row"> 
        <div class="input-field">
          <label class="black-text text-darken-2" for="password">Password: </label>
          <input id="password" type="password" class="validate" v-model="password">
          <div class="submit">
            <button class="btn btn-primary pulse" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
   
    </div>
    
</template>
<script >

export default {
    data(){
      return{
        firstName:'',
        lastName: '',
        email:'',
        password:''
        // confirmPassword:'',
        // terms: false
      }
    },
    methods:{
      onSubmit(){
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
        // confirmPassword: this.confirmPassword,
        // terms: this.terms
        }
        console.log(formData);
        this.$store.dispatch('register', formData)
        this.$router.push('/stocks')
      }
    }
}
</script>

<style>
.box{
  margin: 50px;
  padding: 15px;
  background-color: rgb(211, 211, 211);
  border-radius: 8px;
  opacity: 0.9;
  filter: alpha(opacity=60); /* For IE8 and earlier */
}
#email #password{
margin: 5%;
  font-weight: bold;
  color: #000000;
}
</style>



