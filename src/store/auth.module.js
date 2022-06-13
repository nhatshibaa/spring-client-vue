import AuthService from '../service/auth.service';

const code = localStorage.getItem('code');
const initialState = code
  ? { status: { loggedIn: true }, code }
  : { status: { loggedIn: false }, code: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, account) {
      return AuthService.login(account).then(
          account => {
          commit('loginSuccess', account);
          return Promise.resolve(account);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, code) {
      state.status.loggedIn = true;
      state.user = code;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  }
};
