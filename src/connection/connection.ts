import axios from 'axios';

const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/",
    headers:{
        "Cache-Control": "public, max-age=31536000",
        "X-XSS-Protection":"1; mode=block"
    },
    responseType: 'json',
    responseEncoding: 'utf8',
})

export default api;