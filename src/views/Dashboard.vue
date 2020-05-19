<template>
  <div>
    <Navbar/>
    
    <div class="container mt-5">
      <div class="row ">
        <div class=" col-md-4 mb-4">
          <div class="card">
            <div class="card-header">
              SMK Kelas 12 <br> Bahasa Indonesia
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Durasi 120 Menit</li>
              <li class="list-group-item">Jumlah Soal : 50 Soal</li>
              <li class="list-group-item">Kesempatan Mencoba Tryout : 3</li>
              <li class="list-group-item">
                <a href="soal.html" class="btn btn-success py-2 px-4" @click.prevent="goto()">Kerjakan</a>
              </li>
            </ul>
          </div>
        </div>

        <div class=" col-md-4">
          <div class="card">
            <div class="card-header">
              SMK Kelas 12 <br> Bahasa Inggris
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Durasi 120 Menit</li>
              <li class="list-group-item">Jumlah Soal : 50 Soal</li>
              <li class="list-group-item">Kesempatan Mencoba Tryout : 3</li>
              <li class="list-group-item">
                <a href="soal.html" class="btn btn-success py-2 px-4">Kerjakan</a>
              </li>
            </ul>
          </div>
        </div>

        <div class=" col-md-4">
          <div class="card">
            <div class="card-header">
              SMK Kelas 12 <br> Matematika
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Durasi 120 Menit</li>
              <li class="list-group-item">Jumlah Soal : 50 Soal</li>
              <li class="list-group-item">Kesempatan Mencoba Tryout : 3</li>
              <li class="list-group-item">
                <a href="soal.html" class="btn btn-success py-2 px-4">Kerjakan</a>
              </li>
            </ul>
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

<style>

</style>