import axios from 'axios';

export const BASE_URL = 'http://5fc9346b2af77700165ae514.mockapi.io';

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

export default API;
