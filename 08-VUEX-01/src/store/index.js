import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      username: 'aldo.codes',
    };
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c);
    },
  },
  mutations: {
    updateUsername(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    updateUsername({ commit }, username) {
      commit('updateUsername', username);
    },
  },
});

export default store;
