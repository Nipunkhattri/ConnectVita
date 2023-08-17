import axios from 'axios';

const Api = axios.create({
    baseURL :"http://localhost:5000/"
})

export const AdminLogin = (ldata) => Api.post('/api/loginnow',ldata);
export const signUp = (rdata) => Api.post('/api/register',rdata);
export const form1data = (form1) => Api.post('/api/profile/form1',form1);
export const getdata = (_id) => Api.get(`/api/profile/${_id}`);
export const getexp = (_id) => Api.get(`/api/exp/${_id}`);
export const setabout = (adata) => Api.post('/api/profile/about',adata);
export const setexp = (Edata) => Api.post('/api/profile/exp',Edata);