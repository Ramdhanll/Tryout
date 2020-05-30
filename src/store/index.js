import Vue from 'vue'
import Vuex from 'vuex'
import exams from './modules/exams';
import users from './modules/users';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    exams,
    users
  },
  // strict: debug,
});



