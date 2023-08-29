import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice";
import imageReducer from './features/imageSlice';
import postreducer from './features/PostSlice';
import Eventreducer from './features/EventSlice';

export default configureStore({
  reducer: {
    auth:authReducer,
    image:imageReducer,
    Post:postreducer,
    Event:Eventreducer
  },
});
