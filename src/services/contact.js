import http from './http';
import env from '../env';
const api = env.Invoice_API;

export const addContactSrv = (body) => {
    return http.post(`${api}/contact/add`, body)
}
export const listContactSrv = (body) => {
    return http.get(`${api}/contact/list`)
}

