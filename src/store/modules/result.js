import axios from 'axios'
axios.defaults.baseURL = 'http://api.tryout.test/api/';

const state = () => ({
  result: []
})

const getters = {};

const actions = {
  getResult() {
    axios.get(`get_result/7/5`)
      .then(response => {
        console.log(response);
      })
  }
};

const mutations = {};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}