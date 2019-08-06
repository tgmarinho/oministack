import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-tg.herokuapp.com"
});

export default api;
