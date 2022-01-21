import axios from 'axios';
import authHeader from "./apiHeader";

let API_VERSION = "/api/v1"
let BASE_URL = "http://127.0.0.1:8888"

const axiosClient = axios.create({
    baseURL: BASE_URL + API_VERSION,
    headers: {
        'content-type': 'application/json',
    }
})

const axiosAuthClient = axios.create({
    baseURL: BASE_URL + API_VERSION,
    headers: authHeader,
})


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default axiosClient;
export {axiosAuthClient};