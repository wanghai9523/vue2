import axios from "axios";
const createRequest = function({interceptors, ...args}){
    const http = axios.create({
        baseURL: '',//接口前缀
        ...args,
    });
    const {request, response, error} = interceptors;
    http.interceptors.request.use(request, error);
    setTimeout(() => {
        http.interceptors.request.use(response, error);
    }, 0);
    return http;
}

const getRequest = (contentType) => {
    const request = createRequest({
        api: {},
        interceptors: {
            request(config) {
                console.log('reqqqqqqqqqqqq', config);
                config.data = {unused: 0}
                if(config?.method === 'post'){
                    if(contentType === 'from') {
                        config.headers['content-type'] = 'application/x-www-from-urlencode';
                    }else if ( contentType === 'json' ) {
                        config.headers['content-type'] = 'application/json;charset=utf-8';
                    }
                }
                return config;
            },
            response(res) {
                return res.data;
            },
            error(err) {
                return Promise.reject(err);
            }
        },
        timeout: 10000,
    })
    return request;
}

export { getRequest };
