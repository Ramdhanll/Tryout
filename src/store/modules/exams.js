import axios from 'axios'
axios.defaults.baseURL = 'http://api.tryout.test/api/';

const state = () => ({
  exams: []
})

const getters = {};

const actions = {
  getExams({commit}) {
    axios.get('get-exam')
      .then(response => {
        commit('getExams', response.data);
      })
  }
};

const mutations = {
  getExams(state, exams) {
        console.log(exams);
    state.exams = exams;
  }
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}