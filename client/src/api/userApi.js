// client/src/api/userApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const getAllUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};
