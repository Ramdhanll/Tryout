<template>
  <div>
    <Navbar/>

    <div class="box-timer">
      <p class="timer">00 : 00 : 00</p>
    </div>

    <section class="section-main">
      <div class="container mt-5">
        <div class="row">
          <div class="section-left col-md-6">
            <p class="title-number-question">Soal {{ questionSelect.number }}</p>
            <p class="question">
              {{ questionSelect.question_title }}
            </p>
            <ul>
              <li v-for="(option, index) in questionSelect.option" :key="index">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="answer" id="" :value="option.id" v-model="user_answer">
                    {{ alphabets[index]  + " " + option.option_title}}
                  </label>
                </div>
              </li>
            </ul>
  
            <button class="btn btn-select py-2 px-4 mt-5">Pilih dan Lanjutkan</button>
            <button class="btn btn-bepassed py-2 px-4 mt-5 ml-2">Dilewati</button>
  
          </div>
          <div class="section-right col-md-6">
            <h3 class="mb-3 ml-1">Daftar Soal</h3>
            <div class="number-question">
              <div class="box" 
                  v-for="(question, index) in exam.question" :key="index"
                  @click="showQuestion(question,index)"
                  ref="number"
                  :class="index == 0 ? 'active' : ''"
                  >
                {{ index + 1 }}
              </div>
            </div>
            <div class="note">
              <div class="box-answered"></div>
              <p>Dijawab</p>
              <div class="box-bepassed"></div>
              <p>Dilewati</p>
            </div>
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
      exam : [],
      questionSelect : [],
      alphabets : ['A','B','C','D'],
      indexBefore : 0,
      user_answer : ''
    }
  },
  methods: {
    loadQuestion() {
      this.$store.dispatch('loadQuestion', this.$route.params.slug)
        .then(response => {
          this.exam = response.data[0].exam;
          this.showQuestion(this.exam.question[0], 0);
        })
        .catch(e => {
          console.log(e);
        })
    },
    showQuestion(question, index) {
      this.clearDot();
      this.questionSelect = [];
      this.questionSelect = question;
      this.questionSelect['number'] = index + 1;
      let indexNow = index;
      let btnNow = this.$refs['number'][indexNow]; //0
      btnNow.classList.add('active');

      if(indexNow != this.indexBefore) {
        let btnBefore = this.$refs['number'][this.indexBefore];
        btnBefore.classList.remove('active')
      }
      this.indexBefore = indexNow;
    },
    clearDot() {
    var ele = document.getElementsByName("answer");
    for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
    }
  },
  mounted() {
    this.loadQuestion();
  }
}
</script>

<style>
.active {
  background-color: pink !important;
}
</style>