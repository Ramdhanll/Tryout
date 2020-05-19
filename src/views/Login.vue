<template>
  <div>
    <div class="row">
          <div class="side-left col-md-6">
            <div class="container">
              <p class="title"><span>Tryout</span> online</p>
              <p>prepare yourself for a <br> better future</p>
              <div class="border-form">
                <form action="dashboad.html">
                  <div class="form-group">
                    <label for="">Username</label>
                    <input type="text"
                      class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input type="password"
                      class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input mt-0 " name="" id="" value="checkedValue" checked>
                        Remember Me
                    </label>
                  </div>
                  <button class="btn-login btn btn-primary" @click="goto()">Log In</button>
                  <button class="btn-register btn btn-success">Register</button>
                </form>
              </div>
            </div>
          </div>
          <div class="side-right col-6">
            <img src="assets/img/hero.svg" alt="">
          </div>
      </div>
  </div>
</template>


<script>
export default {
  methods: {
    goto() {
      this.$router.push({name : 'dashboard'});
    }
  },
}
</script>

<style>

</style>