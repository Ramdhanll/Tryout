<template>
  <div>
    <Navbar/>

    <Counter 
      :minute="exam.duration"
      :exam_id="exam.id"
      :stok_answers="stok_answer"      
    />

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
                    <input type="radio" 
                          class="form-check-input" 
                          name="answer"
                          :value="option.option_number" 
                          v-model="user_answer"
                          >
                    {{ alphabets[index]  + " " + option.option_title}}
                  </label>
                </div>
              </li>
            </ul>
  
            <button class="btn btn-select py-2 px-4 mt-5" @click="addAnswer()">Pilih dan Lanjutkan</button>
            <button class="btn btn-bepassed py-2 px-4 mt-5 ml-2" @click="passed()">Dilewati</button>
            <button class="btn btn-save py-2 px-4 mt-5 ml-2" @click="storeAnswer()">Submit</button>
  
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
import Counter from '../components/Counter'

export default {
  components : {
    Navbar, Footer, Counter
  },
  data() {
    return {
      exam : [],
      questionSelect : [],
      alphabets : ['A','B','C','D'],
      indexBefore : 0,
      user_answer : '',
      stok_answer: JSON.parse(localStorage.getItem("stok_answer")) || [],
      indexBtnAnswered : JSON.parse(localStorage.getItem("index_btn_answered")) || [],
      indexBtnPassed : JSON.parse(localStorage.getItem("index_btn_passed")) || [],
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
      this.user_answer = '';
      this.questionSelect = [];
      this.questionSelect = question;
      this.questionSelect['number'] = index + 1;
      let question_id = this.questionSelect.id;
      let check = this.exists(this.stok_answer, question_id);

      if (check == true) {
        for (let i = 0; i < this.stok_answer.length; i++) {
          if (this.stok_answer[i][0] == question_id) {
            this.user_answer = this.stok_answer[i][1];
          }
        }
      } else {
        this.user_answer = '';
      }


      if (!this.questionSelect.selected == '') {
        this.user_answer = this.questionSelect.selected;
      }

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
    },
    exists(arr, item) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == item) {
          return true;
        }
      }
      return false;
    },
    addAnswer() {
      let number = this.questionSelect.number - 1;
      let question_id = this.questionSelect.id;
      let answer = this.user_answer;
      let check = this.exists(this.stok_answer, question_id);
      if (question_id == '' || answer == '') {
        alert('belum diisi !');
        return;
      }else if (check == true) { 
        for (let i = 0; i < this.stok_answer.length; i++) {
          if (this.stok_answer[i][0] == question_id) {
            this.stok_answer[i][1] = answer;
          }
        }
      } else {
        this.stok_answer.push([question_id, answer]);
        let btnAnswered = this.$refs['number'][number];
        btnAnswered.classList.add('answered');
        this.indexBtnAnswered.push(number);
        localStorage.setItem('index_btn_answered', JSON.stringify(this.indexBtnAnswered));
        this.questionSelect['selected'] = answer;
      }

      if (this.exam.question[number + 1] == undefined) {
        alert('dah paling akhir');
      } else {

        this.showQuestion(this.exam.question[number + 1], number + 1);
      }

      localStorage.setItem('stok_answer', JSON.stringify(this.stok_answer));
    },
    passed() {
      let number = this.questionSelect.number - 1;
      let question_id = this.questionSelect.id;
      let check = this.exists(this.stok_answer, question_id);
      if (check == true) {
        this.showQuestion(this.exam.question[number + 1], number + 1);
        return;
      } else {
        let btnAnswered = this.$refs['number'][number];
        btnAnswered.classList.add('passed');
        this.indexBtnPassed.push(number);
        localStorage.setItem('index_btn_passed', JSON.stringify(this.indexBtnPassed));
      }
      this.showQuestion(this.exam.question[number + 1], number + 1);
    },
    storeAnswer() {
      this.$Swal.fire({
        title: 'Simpan semua jawaban ?',
        text: "Pastikan jawaban telah diisi semua!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yaps, Kirim!'
      }).then((result) => { 
        if (result.value) {
          this.$store.dispatch('storeAnswers', {
          exam_id : this.exam.id,
          stok_answers : this.stok_answer
        })
          .then(() => {
            localStorage.removeItem('stok_answer');
            localStorage.removeItem('index_btn_passed');
            localStorage.removeItem('index_btn_answered');
            this.$Swal.fire(
              'Berhasil!',
              'Jawaban berhasil disimpan.',
              'success'
            )
            this.$router.push({name : 'result'});
          })
          .catch(()=> {
            this.$Swal.fire(
              'Gagal!',
              'Jawaban gagal disimpan.',
              'error'
            )
          })
        }
        
      })
      .catch(() => {
        this.$Swal.fire(
              'Gagal!',
              'Jawaban gagal disimpan.',
              'error'
            )
      })
      
    }
  },
  mounted() {
    this.loadQuestion();
  },
  updated() {
    for (let i = 0; i < this.indexBtnAnswered.length; i++) {
      let btnAnswered = this.$refs['number'][this.indexBtnAnswered[i]];
        btnAnswered.classList.add('answered');
    }
    for (let i = 0; i < this.indexBtnPassed.length; i++) {
      let btnAnswered = this.$refs['number'][this.indexBtnPassed[i]];
        btnAnswered.classList.add('passed');
    }
  },
}
</script>

<style>
div .box.active {
  background-color: pink !important;
}
.box.answered {
  background-color: #218A1F !important;
}

.passed {
  background-color: #BEC101 !important;
}
</style>