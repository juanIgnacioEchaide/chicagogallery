import axios from 'axios';
import {BASE_URL} from '../constants/uri';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Custom-Header': 'foobar',
    'Access-Control-Allow-Origin': '*',
  },
});
