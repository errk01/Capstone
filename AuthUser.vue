<template>
    <div class="row">

      <div class="col s3">
        <!-- Grey navigation panel -->
      </div>

      <div class="col s9">
        <!-- dispay the users here  -->
        <h1>List of users by email</h1>
        <div class="card">
            <div class="card blue-grey darken-1">
             <div class="card-content white-text">
                 <span class="card-title">{{name}}</span>
                    <p v-if="email">{{email}}</p>
                 </div>
                <div class="card-action">
             <a href="#">Remove User</a>
        </div>
      </div>
   </div>
</div>
</div>
          
</template>

<script>
export default {
  computed: {
    email(){
        return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  created() {
  this.$store.dispatch('fetchUser')
  }
};
</script>

<style scoped>
</style>