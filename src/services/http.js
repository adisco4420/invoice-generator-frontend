import axios from 'axios';
import env from '../env';
import {user as token, logout } from './auth'
const api = env.Invoice_API;
axios.interceptors.request.use((config) => {
    if(token && config.url.includes(api)) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config
    
})
axios.interceptors.response.use(null, error => {
    let ErrMsg = {status: 0, message: 'sorry an error occured'}
    if (error.response) {
        const { status , data } = error.response;
        ErrMsg = {status, message: data}
        switch (ErrMsg.status) {
            case 401:
                return logout();
            default:
                break;
        }
    }
    return Promise.reject(ErrMsg);

})

export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put,
};