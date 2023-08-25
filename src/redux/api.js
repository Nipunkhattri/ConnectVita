import axios from 'axios';

const Api = axios.create({
    baseURL :"http://localhost:5000/"
})

export const AdminLogin = (ldata) => Api.post('/api/loginnow',ldata);
export const signUp = (rdata) => Api.post('/api/register',rdata);
export const form1data = (form1) => Api.post('/api/profile/form1',form1);
export const getdata = (_id) => Api.get(`/api/profile/${_id}`);
export const getexp = (_id) => Api.get(`/api/exp/${_id}`);
export const getPro = (_id) => Api.get(`/api/Pro/${_id}`);
export const setabout = (adata) => Api.post('/api/profile/about',adata);
export const setexp = (Edata) => Api.post('/api/profile/exp',Edata);
export const setpdata = (pdata) => Api.post('/api/profile/project',pdata);
export const EditexpById = (_id) => Api.get(`/api/EditById/${_id}`);
export const EditProById = (_id) => Api.get(`/api/EProById/${_id}`);
export const updateExpdata = (Edata) => Api.post('/api/Exp/Up',Edata);
export const updateProdata = (pdata) => Api.post('/api/Pro/Up',pdata);
export const savepost = (formData) => Api.post('/api/post',formData);
export const fetchpostdata = () => Api.get('/api/fetchpost');