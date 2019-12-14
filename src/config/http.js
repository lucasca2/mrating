import axios from 'axios';
import qs from 'qs';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '18d8dc9974e79b4c0194bcf58f9c9170';

export const HTTP = axios.create({
    baseURL: API_URL,
    params: {
        api_key: API_KEY,
        language: 'pt-BR',
    },
    paramsSerializer: params => qs.stringify({
        ...params
    }),
});
