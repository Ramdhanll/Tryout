import axios from 'axios'
axios.defaults.baseURL = 'http://api.tryout.test/api/';

const state = () => ({
  token : localStorage.getItem('access_token') || null,
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
  },
  retrieveToken({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('login', data)
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token);
          resolve(response);
          commit;
        })
        .catch(e => {
          reject(e);
        })
    })
  },
  loadUser({state}) {
    return new Promise((resolve, reject) => {
      axios.get('user', {
        headers: {
          'Authorization' : `Bearer ${state.token}`
        }
      })
      .then(response => {
        resolve(response);
      })
      .catch(e => reject(e));
    });
  },
  updateUser({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('set-student',{
        data,
        headers: {
          'Authorization' : `Bearer ${state.token}`
        }
      })
      .then(response => {
        console.log(response);
        resolve(response);
        commit;
      })
      .catch(e => {
        reject(e);
      })
    });
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