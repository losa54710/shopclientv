import axios from 'axios';
import authHeader from './auth-header';
const API_URL = `https://shopback00.herokuapp.com/`;
//const API_URL = `http://localhost:3030/`;

class UserService {

  Admin() {
    return axios.get(API_URL + `api/usuarios/`, { headers: authHeader() });
  }
}

export default new UserService();