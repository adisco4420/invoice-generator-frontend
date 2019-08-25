import http from './http';
import env from '../env';
const api = env.Invoice_API + '/contact';

export const addContactSrv = (body) => {
    return http.post(`${api}/add`, body)
}
export const listContactSrv = () => {
    return http.get(`${api}/list`)
}
export const deleteContactSrv = (id) => {
    return http.delete(`${api}/delete/${id}`)
}
export const viewContactSrv = (id) => {
    return http.get(`${api}/${id}`);
}
export const updateContactSrv = (id, body) => {
    console.log(body);
    return http.put(`${api}/${id}`, body);
}