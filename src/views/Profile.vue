<template>
  <div>
    <Navbar/>
    <p v-if="errors">
    </p>
    <div class="container d-flex justify-content-center mt-3 mb-5">
      <div class="card">
        <div class="card-header text-center">
          <img v-if="!previewImage" :src="user.detail_student.photo" class="rounded rounded-circle" width="100px">
          <img v-else :src="previewImage" class="rounded rounded-circle" width="100px">
        </div>
        <div class="card-body text-left">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Nama</label>
                <input type="text"
                  class="form-control" name="" aria-describedby="helpId" v-model="user.name">
                <small v-if="errors['data.name']" id="helpId" class="form-text text-danger">{{ errors['data.name'][0] }}</small>

              </div>
              <div class="form-group">
                <label for="">NISN</label>
                <input type="text"
                  class="form-control" name="" aria-describedby="helpId" v-model="user.detail_student.nisn">
                <small v-if="errors['data.nisn']" id="helpId" class="form-text text-danger">{{ errors['data.nisn'][0] }}</small>

              </div>
              <div class="form-group">
                <label for="">Jenis Kelamin</label>
                <select class="form-control" name="gender" id="gender" v-model="user.detail_student.gender">
                  <option value="" disabled>Silahkan pilih gender anda</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
                <small v-if="errors['data.gender']" id="helpId" class="form-text text-danger">{{ errors['data.gender'][0] }}</small>

              </div>
              <div class="form-group">
                <label for="">Jurusan</label>
                <input type="text"
                  class="form-control" name="" aria-describedby="helpId" v-model="user.detail_student.expertise_program">
                <small v-if="errors['data.expertise_program']" id="helpId" class="form-text text-danger">{{ errors['data.expertise_program'][0] }}</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Tanggal Lahir</label>
                <input type="date"
                  class="form-control" name="" aria-describedby="helpId"
                  value="2018/04/22" 
                  v-model="user.detail_student.date_of_birth">
                <small v-if="errors['data.date_of_birth']" id="helpId" class="form-text text-danger">{{ errors['data.date_of_birth'][0] }}</small>
              </div>
              <div class="form-group">
                <label for="">Alamat</label>
                <textarea name="address" cols="20" rows="3" class="form-control" v-model="user.detail_student.address" ></textarea>
                <small v-if="errors['data.address']" id="helpId" class="form-text text-danger">{{ errors['data.address'][0] }}</small>
              </div>
              <div class="form-group">
                <label for="">Ganti Foto</label>
                <input type="file" class="form-control-file" name="" placeholder="" aria-describedby="fileHelpId" @change="prepareImage">
              </div>
              <button type="button" class="btn btn-success btn-block d-flex justify-content-center" @click="updateUser">
                <div>Update</div>
                <div v-show="loading">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <rect x="17.5" y="29.6903" width="15" height="40.6194" fill="#f0efef">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate> </rect> <rect x="42.5" y="29.0819" width="15" height="41.8363" fill="#e1e1e1">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate> </rect> <rect x="67.5" y="27.8997" width="15" height="44.2005" fill="#c9cac7">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate> </rect> </svg>
                </div>
                </button>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar-tryout'
import Footer from '../components/Footer-tryout'
export default {
  components : {
    Navbar, Footer
  },
  data() {
    return {
      previewImage : '',
      user: {
        name: '',
        detail_student : {
          address: '',
          nisn: '',
          expertise_program: '',
          gender : '',
          photo : '',
          date_of_birth: ''
        }
      },
      errors: [],
      loading: false
    }
  },
  methods : {
    goto() {
      this.$router.push({name : 'exam'});
    },
    prepareImage(e) {
      this.previewImage = '';
      let photo = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = e => {
        this.previewImage = e.target.result;  
      }
    },
    loadUser(){
      this.$Spin.show();
      this.$store.dispatch('loadUser')
        .then(response => {
          this.user = response.data[0];
          this.$Spin.hide();
        });
    }, 
    updateUser() {
      this.loading = true;
      this.$store.dispatch('updateUser', {
        name: this.user.name,
        nisn : this.user.detail_student.nisn,
        gender : this.user.detail_student.gender,
        date_of_birth : this.user.detail_student.date_of_birth,
        address : this.user.detail_student.address,
        expertise_program : this.user.detail_student.expertise_program,
        photo : this.previewImage,
        student_id: this.user.detail_student.id,
        user_id: this.user.id
      })
      .then(() => {
        this.loading = false;
        this.$Toast.fire({
            icon: 'success',
            title: 'Update Berhasil!'
          })
      })
      .catch((e) => {
        this.loading = false;
        this.errors = e.response.data.errors;
        this.$Toast.fire({
            icon: 'error',
            title: 'Update Gagal!'
          })
      })
    }
  },
  mounted(){
    this.loadUser();
    // this.handleSpinShow();
  }
}
</script>

<style scoped>
.container {
  overflow: auto;
}
</style>