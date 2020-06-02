<template>
  <div>
    <Navbar/>
    
    <div class="container d-flex justify-content-center mt-3">
      <div class="card">
        <div class="card-header">
          <h3 class="font-weight-bold">
            Hasil Tryout Online
          </h3>
        </div>
        <div class="card-body">
          <table class="table table-striped table-inverse table-responsive">
            <thead class="thead-inverse">
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Waktu Pelaksanaan</th>
                <th>Total Pertanyaan</th>
                <th>Status</th>
                <th>Nilai</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(exam, index) in exams" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ exam.exam.title }}</td>
                  <td>{{ exam.exam.date_time }}</td>
                  <td>{{ exam.exam.total_question }}</td>
                  <td><span v-html="setStatus(exam.exam.status)"></span></td>
                  <td>{{ exam.exam.result }}</td>
                  <td>
                    <div v-if="!exam.exam.status == 'started'" class="badge badge-success py-2 px-2">Detail</div>
                    <router-link :to="{path : `exam/${exam.exam.slug}`}" class="btn btn-danger" v-if="exam.exam.status == 'started'">Mulai Kerjakan!</router-link>
                    
                  </td>
                </tr>
              </tbody>
          </table>
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
      exams : []
    }
  },
  methods : {
    loadResult() {
      this.$store.dispatch('loadResult')
        .then(response => {
          this.exams = response.data
        })
        .catch(e => {
          console.log(e);
        })
    },
    setStatus(status) {
      if (status == 'pending') {
        return '<div class="badge badge-warning py-4 px-4">Pending</div>';
      } else if (status == 'started') {
        return '<div class="badge badge-warning py-2 px-4">Started</div>';
      }else if (status == 'completed') {
        return '<div class="badge badge-success py-2 px-2">Completed</div>';
      }
    }
  },
  created () {
    
  },
  mounted() {
    this.loadResult();
  }
}
</script>

<style>

</style>