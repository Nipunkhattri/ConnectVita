import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api';
import {toast} from 'react-toastify'

export const setform1p = createAsyncThunk(
  'auth/form1',
  async ({form1,navigate}) =>{
    try {
      const res = await api.form1data(form1);
      console.log(res);
      toast.success('details added successfully');
      navigate('/profile');
      return res;
    } catch (error) {
      console.log(error);
    }
  }
)

export const setExperience = createAsyncThunk(
  'auth/exp',
  async ({Edata,navigate})=>{
    try {
      const res = await api.setexp(Edata);
      console.log(res);
      toast.success('experience added successfully');
      navigate('/profile');
      return res;
    } catch (error) {
      console.log(error);
    }
  }
)

export const updateExp = createAsyncThunk(
  'auth/update',
  async ({Edata,navigate}) =>{
    try {
      console.log(Edata);
      const res = await api.updateExpdata(Edata);
      toast.success("Updated Successfully");
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  }
)

export const updatePro = createAsyncThunk(
  'auth/update',
  async ({pdata,navigate}) =>{
    try {
      // console.log(Edata);
      const res = await api.updateProdata(pdata);
      toast.success("Updated Successfully");
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  }
)
export const setaboutdata = createAsyncThunk(
  'auth/about',
  async ({adata,navigate})=>{
    try {
      console.log(adata);
      const res = await api.setabout(adata);
      console.log(res);
      toast.success('about added successfully');
      navigate('/profile');
      return res;
    } catch (error) {
      console.log(error)
    }
  }
)

export const getdata = createAsyncThunk(
  'auth/getdata',
  async (_id) =>{
    try {
      console.log(_id);
      const res = await api.getdata(_id);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
)

export const fetchexp = createAsyncThunk(
  'auth/fetchexp',
  async (_id) =>{
    try {
      const res = await api.getexp(_id);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
)

export const getExpeditId = createAsyncThunk(
'auth/EdiExpId',
async ({_id,navigate}) =>{
  try {
    const res = await api.EditexpById(_id);
    console.log(res);
    // navigate('/profile');
    return res.data
  } catch (error) {
    console.log(error);
  }
}
)

export const getProeditId = createAsyncThunk(
'auth/EdiProId',
async ({_id,navigate}) =>{
  try {
    const res = await api.EditProById(_id);
    console.log(res);
    // navigate('/profile');
    return res.data
  } catch (error) {
    console.log(error);
  }
}
)
export const fetctPro = createAsyncThunk(
  'auth/fetchPro',
  async (_id) =>{
    try {
      const res = await api.getPro(_id);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
)

export const setproject = createAsyncThunk(
  'auth/Productadd',
  async({pdata,navigate}) => {
    try {
      const res = await api.setpdata(pdata)
      console.log(res);
      toast.success("Project Added");
      navigate('/profile');
      return res;
    } catch (error) {
      console.log(error);
    }
  }
)

export const authlogin = createAsyncThunk(
  'auth/login',
  async ({ldata,navigate}) =>{
    try {
      const res = await api.AdminLogin(ldata);
      console.log(res);
      toast.success('login successfully');
      navigate('/');
      return res;
    } catch (error) {
      toast.error('Invalid Crediantials');
      console.log(error);
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async ({rdata,navigate})=>{
    try {
      console.log(rdata);
      const response = await api.signUp(rdata);
      console.log(response);
      navigate('/login');
      toast.success("Registered successfully");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
)

const persistedState = localStorage.getItem('profile')
  ?  JSON.parse(localStorage.getItem('profile')) : null;

const persistedState1 = localStorage.getItem('auth')
  ?  JSON.parse(localStorage.getItem('auth')) : false;

const AuthSlice = createSlice({
    name:"auth",
    initialState:{
        isAuthenticated: persistedState1,
        data:persistedState,
        exp:null,
        Pro:null,
        image:null
    },
    reducers:{
        setUser: (state, action) => {
            state.data = action.payload;
          },
          getdata:(state,action) =>{
            state.data = action.payload;
          },
          login: (state , action) => {
            state.isAuthenticated = action.payload.data.isauth;
          },
          setLogout: (state) => {
            state.isAuthenticated = false;
            localStorage.clear();
            state.data = null;
          },
          addImage: (state, action) => {
            state.image = action.payload;
          },
    },
    extraReducers:{
      [authlogin.pending]: (state, action) => {
        state.loading = true;
      },
      [authlogin.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("auth", JSON.stringify(action.payload.data.token ));
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.data = action.payload;
        state.isAuthenticated = action.payload.data.token;
      },
      [authlogin.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      [getdata.pending]: (state, action) => {
        state.loading = true;
      },
      [getdata.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("profiledata", JSON.stringify({ ...action.payload }));
        state.data = action.payload;
        // state.isAuthenticated = action.payload.data.token;
      },
      [getdata.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      [fetchexp.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchexp.fulfilled]: (state, action) => {
        state.loading = false;
        // localStorage.setItem("profiledata", JSON.stringify({ ...action.payload }));
        state.exp = action.payload;
        // state.isAuthenticated = action.payload.data.token;
      },
      [fetchexp.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      [fetctPro.pending]: (state, action) => {
        state.loading = true;
      },
      [fetctPro.fulfilled]: (state, action) => {
        state.loading = false;
        // localStorage.setItem("profiledata", JSON.stringify({ ...action.payload }));
        state.Pro = action.payload;
        // state.isAuthenticated = action.payload.data.token;
      },
      [fetctPro.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
})

export const { setUser, setLogout , addImage} = AuthSlice.actions;

export default AuthSlice.reducer;
