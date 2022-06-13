import axios from 'axios';

const API_URL = 'http://localhost:8090/api/v1';

class AuthService {
  login(account) {
      console.log("username la: " + account.username)
      console.log("password la: " + account.password)
    return axios
        .post(API_URL + '/login?clientId=1&scope=image&redirectUrl=/consenScreen', {
            username: account.username,
            password: account.password
        })
        .then(response => {
          if (response.data.code) {
            localStorage.setItem('code', response.data.code);
          }
          return response.data;
        });
  }
}

export default new AuthService();
