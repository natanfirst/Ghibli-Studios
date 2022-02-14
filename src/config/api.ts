import axios from "axios";

const api = axios.create({
    baseURL: 'https://ghibliapi.herokuapp.com',
    headers: {
      'Content-type': 'application/json',
    },
  });
  
export default api;