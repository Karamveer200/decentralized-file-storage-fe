import axios from 'axios';

export const NODE_BE_API = axios.create({
  baseURL: process.env.REACT_APP_NODE_BE_API,
  headers: {}
});
