import axios from 'axios';

export const signIn = (login, password, updateAuthState) => {
  axios.post('http://localhost:5002/token', {
    login,
    password,
  }).then(res => {
    console.log(res.data);
    localStorage.setItem('authToken', JSON.stringify(res));
    updateAuthState(true);
  }).catch(err => {
    console.log(err);
    updateAuthState(false);
  })
}
