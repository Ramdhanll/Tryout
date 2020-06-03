import axios from 'axios'
axios.defaults.baseURL = 'http://api.tryout.test/api/';

const state = () => ({
  exams: []
})

const getters = {};

const actions = {
  getExams() {
    return new Promise((resolve, reject) => {
      axios.get('get-exams')
      .then(response => {
        resolve(response);
      })
      .catch(e => {
        reject(e);
      })
    })
  },
  enroll_exam({commit, rootState}, exam_id) {
    return new Promise((resolve, reject) => {
      axios.post('enroll_exam',{
        exam_id
      }, 
      {  
        headers: {
          'Authorization' : `Bearer ${rootState.users.token}`
        }
      })
      .then(response => {
        commit;
        resolve(response);
      })
      .catch(e => {
        reject(e);
      })
    })
  },
  registered({commit, rootState,}) {
    return new Promise((resolve, reject) => {
      axios.get('registered',
      { 
        headers: {
          'Authorization' : `Bearer ${rootState.users.token}`
        }
      })
      .then(response => {
        commit;
        resolve(response);
      })
      .catch(e => {
        reject(e);
      })
    })
  },
  loadResult({commit, rootState,}) {
    return new Promise((resolve, reject) => {
      axios.get('get-result',
      { 
        headers: {
          'Authorization' : `Bearer ${rootState.users.token}`
        }
      })
      .then(response => {
        commit;
        resolve(response);
      })
      .catch(e => {
        reject(e);
      })
    })
  },
  loadQuestion({commit, rootState,}, slug) {
    return new Promise((resolve, reject) => {
      axios.post('get-question',{
        slug
      },
      { 
        headers: {
          'Authorization' : `Bearer ${rootState.users.token}`
        }
      })
      .then(response => {
        commit;
        resolve(response);
      })
      .catch(e => {
        reject(e);
      })
    })
  },
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