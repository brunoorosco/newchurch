import axios from 'axios'

const api = axios.create({
    baseURL: 'localhost:3005'
});

export default api;