import axios from 'axios'
axios.defaults.baseURL = 'http://api.tryout.test/api/';

const state = () => ({
  exams: []
})

const getters = {};

const actions = {
  register({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('register', data)
        .then(response => {
          commit;
          resolve(response);
        })
        .catch(e => {
          reject(e);
        })
    })
  }
};

const mutations = {
  
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}