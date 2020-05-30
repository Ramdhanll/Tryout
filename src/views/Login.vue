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
                    <label for="">Email</label>
                    <input type="email"
                      class="form-control" name="" aria-describedby="helpId" placeholder="" v-model="form_login.email">
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>
                  <div class="form-group">
                    <label for="">Password</label>
                    <input type="password"
                      class="form-control" name="" aria-describedby="helpId" placeholder="" v-model="form_login.password">
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input mt-0 " name="" value="checkedValue" checked>
                        Remember Me
                    </label>
                  </div>
                  <div class="d-flex">
                    <button type="button" class="btn-login btn btn-primary d-flex justify-content-center" @click="login()">
                    <div>Login</div>
                    <div v-show="loading">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <rect x="17.5" y="29.6903" width="15" height="40.6194" fill="#f0efef">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate> </rect> <rect x="42.5" y="29.0819" width="15" height="41.8363" fill="#e1e1e1">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate> </rect> <rect x="67.5" y="27.8997" width="15" height="44.2005" fill="#c9cac7">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate> </rect> </svg>
                    </div>
                  </button>
                  <button type="button" class="btn-register btn btn-success" @click="showModalRegister()">Register</button>
                  <!-- <button type="button" @click="log()">TESTING</button> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="side-right col-6">
            <img src="assets/img/hero.svg" alt="">
          </div>
      </div>
      
      <b-modal ref="register-modal" id="modal-1" title="Form Register">
        <form action="dashboad.html">
            <div class="form-group">
              <label for="">Nama</label>
              <input type="text"
                class="form-control" name="name" aria-describedby="helpId" placeholder="Masukan nama lengkap" v-model="form_register.name">
              <small v-if="errors_register.name" id="helpId" class="form-text text-danger">{{errors_register.name[0]}}</small>
            </div>
            <div class="form-group">
              <label for="">Email</label>
              <input type="email"
                class="form-control" name="email" aria-describedby="helpId" placeholder="Masukan alamat email" v-model="form_register.email">
              <small v-if="errors_register.email" id="helpId" class="form-text text-danger">{{errors_register.email[0]}}</small>
            </div>
            <div class="form-group">
              <label for="roles">Roles</label>
              <select class="form-control" name="roles" id="roles" v-model="form_register.roles">
                <option value="" disabled>Silahkan pilih roles anda</option>
                <option value="teacher">Guru</option>
                <option value="student">Siswa</option>
              </select>
              <small v-if="errors_register.roles" id="helpId" class="form-text text-danger">{{errors_register.roles[0]}}</small>
            </div>
            <div class="form-group">
              <label for="">Password</label>
              <input type="password"
                class="form-control" name="password" aria-describedby="helpId" placeholder="Masukan password" v-model="form_register.password">
              <small v-if="errors_register.password" id="helpId" class="form-text text-danger">{{errors_register.password[0]}}</small>
            </div>
            <div class="form-group">
              <label for="">Konfirmasi Password</label>
              <input type="password"
                class="form-control" name="password_confirmation" aria-describedby="helpId" placeholder="Masukan konfirmasi password" v-model="form_register.password_confirmation">
              <small v-if="errors_register.password_confirmation" id="helpId" class="form-text text-danger">{{errors_register.password_confirmation[0]}}</small>

            </div>
            
          </form>

          <template v-slot:modal-footer class="d-flex align-items-center mr-2">
            <div class="form-group d-flex justify-content-center">
              <button class="btn-register btn btn-success btn-block d-flex" @click="register()">
                <div>Register</div>
                <div v-show="loading_register">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <rect x="17.5" y="29.6903" width="15" height="40.6194" fill="#f0efef">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate> </rect> <rect x="42.5" y="29.0819" width="15" height="41.8363" fill="#e1e1e1">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate> </rect> <rect x="67.5" y="27.8997" width="15" height="44.2005" fill="#c9cac7">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate> </rect> </svg>
                </div>
              </button>
            </div>
          </template>
      </b-modal>
    
  </div>
</template>


<script>
export default {
  data(){
    return{
      form_login : {
        email: '',
        password: ''
      },
      form_register : {
        name: '',
        email: '',
        roles : '',
        password: '',
        password_confirmation : ''
      },
      errors_register : [],
      loading: false,
      loading_register: false
    }
  }
  ,
  methods: {
    showModalRegister() {
      this.$refs['register-modal'].show();
    },
    register() {
      this.errors_register = [];
      this.loading_register = true;
      this.$store.dispatch('register', this.form_register)
        .then(() => {
          this.$store.dispatch('retrieveToken',{
            email : this.form_register.email,
            password : this.form_register.password,
          })
          this.loading_register = false;
          this.$refs['register-modal'].hide();
          
          this.form_register = [];

          this.$router.push({name: 'profile'});
          this.$Toast.fire({
            icon: 'success',
            title: 'Register berhasil, silahkan update profile anda!'
          })
        })
        .catch(e => {
          this.$Toast.fire({
            icon: 'error',
            title: 'Register gagal, coba lagi'
          })
          this.loading_register = false;
          this.errors_register = e.response.data.errors;
        });
    },
    login() {
      this.loading = true;
      this.$store.dispatch('retrieveToken', this.form_login)
        .then((response) => {
          this.$Toast.fire({
            icon: 'success',
            title: 'Login berhasil'
          })
          this.loading = false;
          console.log(response.response);
        })
        .catch(e => {
          this.loading = false;
          this.$Toast.fire({
            icon: 'error',
            title: 'Login gagal, coba lagi'
          })
          console.log(e.response);
        })
    }
  },
}
</script>

<style>

</style>