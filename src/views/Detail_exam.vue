<template>
  <div>
    <Navbar/>
    <section class="section-main">
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="section-left col-md-12 mb-3" v-for="(result, index) in results" :key="index">
            <p class="title-number-question font-weight-bold">Soal {{ index + 1 }}</p>
            <p class="question">
              {{ result.question.question_title}}
            </p>
            <ul class="">
              <li v-for="(opt, index) in result.question.option" :key="index" class="ml-4">
                <div class="form-check">
                  <label class="form-check-label" :class="result.question.answer_option == index +  1 ? 'text-success': ''">
                    {{ alphabets[index] + " " + opt.option_title}}
                  </label>
                </div>
              </li>
            </ul>
            <p>Jawaban Anda : {{ alphabets[result.user_answer_option - 1] }} 
              <span v-if="result.user_answer_option == result.question.answer_option" class="badge badge-success text-white ml-2 p-2">Benar</span>
              <span v-else class="badge badge-danger text-white ml-2 p-2">Salah</span>
            </p>
          </div>
        </div>
      </div>
    </section>


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
      results : [],
      alphabets : ['A','B','C','D'],
    }
  },
  methods : {
    loadDetailExam() {
      this.$Spin.show();
      this.$store.dispatch('loadDetailExam', this.$route.params.id)
        .then(response => {
          this.results = response.data;
          this.$Spin.hide();
        })
        .catch(() => {
          this.$Spin.hide();          
        })
    }
  },
  mounted() {
    this.loadDetailExam();
  },
  updated() {
  },
  computed: {
  },
}
</script>

<style>

</style>