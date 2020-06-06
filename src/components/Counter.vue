<template>
  <div v-if="loaded">
    <div class="box-timer">
      <p class="timer">{{ displayHours }} : {{ displayMinutes }} : {{ displaySeconds }} </p>
    </div>
  </div>
</template>

<script>
export default {
  props : ['minute','exam_id','stok_answers'],
  data() {
    return {
      displayDays: 0,
      displayHours:  0,
      displayMinutes: 0,
      displaySeconds: 0,
      loaded : false,
      timer : localStorage.getItem('timer')
    }
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    yearNow() {
      const date = new Date();
      const year = date.getFullYear();
      return year;
    },
    monthNow() {
      const date = new Date();
      const month = date.getMonth();
      return month;
    },
    dayNow() {
      const date = new Date();
      const day = date.getDay();
      return day;
    },
    hourNow() {
      const date = new Date();
      const hour = date.getHours();
      return hour;
    },
    minuteNow() {
      const date = new Date();
      const minute = date.getMinutes();
      return minute;
    },
    minuteTimer() {
      return this.minuteNow + this.minute;
    }
  },
  methods: {
    formatNum : (num) => (num < 10 ? `0${num}` : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        let end = '';
        if (localStorage.getItem('timer')) {
          end =  new Date (localStorage.getItem('timer'));
        } else {
          end =  new Date(this.yearNow, this.monthNow, this.dayNow, this.hourNow, this.minuteTimer, 0);
        }

        const distance = end.getTime() - now.getTime();

        const days = Math.floor((distance / this._days));
        const hours = Math.floor((distance % this._days) / this._hours)
        const minutes = Math.floor((distance % this._hours) / this._minutes)
        const seconds = Math.floor((distance % this._minutes) / this._seconds)

        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);

        this.loaded = true;

        localStorage.setItem('timer', end);
        
        if (distance < 1 ) {
          this.$Swal.fire(
            'Waktu Habis!',
            'Pilihan dan jawaban telah disimpan!',
            'success'
          )
          localStorage.removeItem('timer');
          localStorage.removeItem('stok_answer');
          localStorage.removeItem('index_btn_passed');
          localStorage.removeItem('index_btn_answered');
          clearInterval(timer);
          this.displayDays =  '00';
          this.displayHours =  '00';
          this.displayMinutes =  '00';
          this.displaySeconds =  '00';

            this.$store.dispatch('storeAnswers', {
              exam_id : this.exam_id,
              stok_answers : this.stok_answers
            })
            .then(() => {
              this.$router.push({name: 'result'})
            })
        }
      }, 1000)
    }
  },
  mounted() {
    this.showRemaining();
  },
}
</script>

<style>
  
</style>