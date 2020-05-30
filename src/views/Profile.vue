<template>
  <div>
    <Navbar/>
    
    <div class="container d-flex justify-content-center mt-3 mb-5">
      <div class="card">
        <div class="card-header text-center">
          <img src="http://api.tryout.test/images/user/default.png" class="rounded rounded-circle" width="100px">
        </div>
        <div class="card-body text-left">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Nama</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="Ramdhani">
                <small id="helpId" class="form-text text-muted">Help text</small>
              </div>
              <div class="form-group">
                <label for="">NISN</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="17552135">
              </div>
              <div class="form-group">
                <label for="">Jenis Kelamin</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="Laki-laki">
              </div>
              <div class="form-group">
                <label for="">Jurusan</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="Teknik Pemesinan">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Tanggal Lahir</label>
                <input type="date"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="1998-02-04">
              </div>
              <div class="form-group">
                <label for="">Alamat</label>
                <textarea name="address" id="" cols="20" rows="3" class="form-control">Perum dasana indah</textarea>
              </div>
              <div class="form-group">
                <label for="">Ganti Foto</label>
                <input type="file" class="form-control-file" name="" id="" placeholder="" aria-describedby="fileHelpId">
              </div>
              <button class="btn btn-success btn-block">Update</button>
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
  methods : {
    goto() {
      this.$router.push({name : 'exam'});
    }
  }
}
</script>

<style scoped>
.container {
  overflow: auto;
}
</style>