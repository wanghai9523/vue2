import axios from "axios";
const buildEnv = process.env.VUE_APP_ENV;
const createRequest = function({ api, interceptors, ...args}){
    const http = axios.create({
        baseURL: api[buildEnv],
        ...args,
    });
    // const {request, response, error} = interceptors;
    // console.log(request, 'request');
    console.log('interceptors', interceptors);
    // http.interceptors.request.use(config => config, error);
    // http.interceptors.request.use(response, error);
    return http;
}

export default createRequest;