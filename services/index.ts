import axios from 'axios';
import {BASE_URL} from '../constants/uri';

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
});
