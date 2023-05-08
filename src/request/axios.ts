import axios from "axios";

export const requestNotToken = axios.create({
    baseURL: 'http://localhost:9090/'
});

export const requestToken = axios.create({
    baseURL: 'http://localhost:9090',
    headers: {'token': localStorage.getItem('token')}
});