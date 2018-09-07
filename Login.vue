<template>
<div>
  <div class="container">
  <form class="box" @submit.prevent="onSubmit">
  <label class="black-text text-darken-2"><h1> Login </h1></label>
    <div class="row">
        <div class="input-field">
          <label class="black-text text-darken-2" data-error="Invalid" data-success="Valid" for="email">Email</label>
          <input v-model="email" id="email" type="email" class="validate" >
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <label class="black-text text-darken-2" for="password">Password</label>
          <input v-model="password" id="password" type="password" class="validate" >
          <div class="submit">
            <button class="btn btn-primary pulse" type="submit"> Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>  
</template>
<script >
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log('this is the form data', formData);
      console.log('this router', this.$router);

      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password
      });
      this.$router.push('/portfolio');
    }
  }
};
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



