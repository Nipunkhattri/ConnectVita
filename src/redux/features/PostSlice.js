import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api';
import { toast } from "react-toastify";

export const savedata = createAsyncThunk(
    'post/save',
    async ({formData,dispatch}) =>{
        try {
            console.log(formData);
            const res = await api.savepost(formData);
            toast.success('post added successfully');
            console.log(res);
            // const data1 = res.data;
            window.location.reload();
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchpost = createAsyncThunk(
    'fetch/post',
    async ()=>{
        try {
            const res = await api.fetchpostdata();
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
)

const PostSlice = createSlice({
    name:'Post',
    initialState:{
        post:null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchpost.fulfilled, (state, action) => {
            state.post = action.payload; // Update the state with the data1 payload
        });
    }
})

export const { setPost } = PostSlice.actions;

export default PostSlice.reducer;