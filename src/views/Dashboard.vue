<template>
  <div>
    <Navbar/>
    {{ timestamp }}
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        
        <div class=" col-md-4 mb-4" v-for="(exam, index) in exams" :key="index">
          <div class="card">
            <div class="card-header">
              {{ exam.title }}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Durasi {{ exam.duration }} Menit</li>
              <li class="list-group-item">Jumlah Soal : {{ exam.total_question}} Soal</li>
              <li class="list-group-item">Peserta mendaftar : {{ exam.enroll_exam_count }} orang</li>
              <li class="list-group-item">Waktu Pelaksanaan : {{ exam.date_time }}</li>
              <li class="list-group-item">
                <button v-if="!examRegistered.includes(exam.id)" class="btn btn-success py-2 px-4 d-flex justify-content-center align-items-center m-auto" type="button" @click.prevent="enroll_exam(exam.id)">
                  <div>Daftar Ujian</div>
                  <div v-show="loading == exam.id">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="25px" height="25px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"> <rect x="17.5" y="29.6903" width="15" height="40.6194" fill="#f0efef">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate> </rect> <rect x="42.5" y="29.0819" width="15" height="41.8363" fill="#e1e1e1">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate> </rect> <rect x="67.5" y="27.8997" width="15" height="44.2005" fill="#c9cac7">   <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>   <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate> </rect> </svg>
                  </div>
                </button>
                <button v-if="examRegistered.includes(exam.id)" disabled class="btn btn-success py-2 px-4 d-flex justify-content-center align-items-center m-auto" type="button" @click.prevent="enroll_exam(exam.id)">
                  <div>Sudah Terdaftar</div>
                </button>
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
  data() {
    return {
      timestamp : '',
      exams: '',
      loading : null,
      examRegistered: [],
      raha: '23'
    }
  },
  methods : {
    enroll_exam(exam_id) {
      this.loading = exam_id;
      this.$store.dispatch('enroll_exam', exam_id)
        .then(() => {
          this.loading = null;
          this.$Fire.$emit('loadExams');
          this.$Toast.fire({
            icon: 'success',
            title: 'Berhasil mendaftar ujian!'
          })
        })
        .catch(() => {
          this.loading = null;
          this.$Toast.fire({
            icon: 'error',
            title: 'Gagal mendaftar ujian!'
          })
        })
    },
    checkTime(i) {
      if (i < 10) {
        i = `0${i}`;
      }
      return i;
    },
    getNow() {
        const today = new Date();
        let m = today.getMinutes();
        let s = today.getSeconds();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + this.checkTime(m) + ":" + this.checkTime(s);
        const dateTime = date +' '+ time;
        this.timestamp = dateTime;
    },
    loadExams() {
      this.$store.dispatch('getExams')
        .then(response => {
          this.exams = response.data;
        })
        .catch(e => {
          console.log(e);
        })
    },
    registered() {
      this.$store.dispatch('registered')
        .then(response => {
          response.data.forEach(((item, index) => {
            index;
            this.examRegistered.push(item['exam_id']);

          })
          );
        })
        .catch(e => {
          console.log(e);
        })
    }
  },
  created () {
    setInterval(this.getNow, 500);
    this.$Fire.$on('loadExams', () => {this.loadExams()});
    this.$Fire.$on('loadExams', () => {this.registered()});
  },
  mounted() {
    this.loadExams();
    this.registered();
  },
  updated() {
  },
  computed: {
  },
}
</script>

<style>

</style>