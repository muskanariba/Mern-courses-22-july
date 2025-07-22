import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/auth", // or your deployed URL
});

export default instance;
