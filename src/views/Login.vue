<template>
  <main class="login-container">
      <div class="container">
        <div class="row page-login d-flex align-items-center">
          <div class="section-left col-12 col-md-6 text-left">
            <h1 class="mb-4">Prepare yourself for a <br>better future</h1>
            <img src="assets/img/login_img.png" alt="" class="w-75 d-none d-sm-flex"> <!--d-none dilayar kecil gambar gaada -->
          </div>
          <div class="section-right col-12 col-md-4">
            <div class="card">
              <div class="card">
                <div class="card-body">
                  <div class="text-center">
                    <a class="navbar-brand text-secondary" href="#"><span>Tryout</span> online</a>
                  </div>
                    <div class="form-group text-left">
                      <label for="">Email</label>
                      <input type="email"
                        class="form-control" name="" aria-describedby="helpId" placeholder="" v-model="form_login.email">
                      <small v-if="errors_login.email" 
                            class="form-text text-danger">
                            {{errors_login.email[0]}}
                      </small>
                    </div>
                    <div class="form-group text-left">
                      <label for="">Password</label>
                      <input type="password"
                        class="form-control" name="" aria-describedby="helpId" placeholder="" v-model="form_login.password">
                        <small v-if="errors_login.password" 
                            class="form-text text-danger">
                            {{errors_login.password[0]}}
                        </small>
                    </div>
                    <div class="form-group form-check text-left">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked>
                        Remember Me
                      </label>
                    </div>
                    <button type="button" class="btn-login btn btn-primary d-flex justify-content-center btn-block" @click="login()" @submit="login()">
                      <div>Login</div>
                      <div v-show="loading">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <rect x="17.5" y="29.6903" width="15" height="40.6194" fill="#f0efef">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate> </rect> <rect x="42.5" y="29.0819" width="15" height="41.8363" fill="#e1e1e1">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate> </rect> <rect x="67.5" y="27.8997" width="15" height="44.2005" fill="#c9cac7">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate> </rect> </svg>
                      </div>
                    </button>
                    <p class="text-center mt-4">
                      <router-link :to="{name : 'register'}" style="font-size:16px">Form Register</router-link>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
      errors_login : [],
      loading: false,
      loading_register: false
    }
  }
  ,
  methods: {
    showModalRegister() {
      this.$refs['register-modal'].show();
    },
    showModalLogin() {
      this.$refs['login-modal'].show();
    },
    login() {
      if(this.form_login.email.trim() == '') return  this.$Notice.error({title: 'Username wajib diisi !'});
      if(this.form_login.password.trim() == '') return  this.$Notice.error({title: 'Password wajib diisi !'});
      this.loading = true;
      this.$store.dispatch('retrieveToken', this.form_login)
        .then(() => {
          this.loading = false;
          this.$Notice.success({
                    title: 'Login Berhasil!',
                    // desc: 'Selamat datang ...',
                });
          this.$router.push({name : 'dashboard'});
        })
        .catch((e) => {
          this.loading = false;
          this.errors_login = e.response.data.errors;
          this.$Notice.error({
            title: 'Login Gagal',
                    desc: 'email atau password salah',
                });
        })
    }
  },
}
</script>

<style lang="scss">
// .btn-login {
//   background-color: #218A1F !important;
// }
.login-container {
  @media (min-width: 992px){
    background: linear-gradient(90deg, #fff 60%, #413D60 40%);
    width: 100vw;
    height: 100vh;
  }

  .page-login {
    height: 100vh;

    .btn-login {
      background-color: #218A1F !important;
      color: #fff;

      &:hover {
        color : #fff !important;
        background-color: #0bdb08 !important;
      }
    }

    .section-left {
    margin-top: -130px;

      h1 {
        font-family: Playfair Display;
        font-style: normal;
        font-weight: bold;
        font-size: 50px;
        line-height: 67px;

        color: #413D60;
      }
    }
    .section-right {
      p {
        a {
          font-family: Roboto;
          font-style: normal;
          font-weight: 100;
          font-size: 22px;
          line-height: 26px;
          text-decoration-line: underline;

          color: #a8a4a4;
        }
      }
    }
  }
}
</style>