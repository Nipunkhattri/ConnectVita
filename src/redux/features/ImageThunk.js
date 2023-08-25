import { addImage } from './AuthSlice';
import axios from 'axios';  

// Thunk to upload image to Cloudinary and dispatch addImage action
export const uploadImage = (data1,navigate) => async dispatch => {
  try {
    const formData = new FormData();
    formData.append('image', data1.imageFile);
    formData.append('id', data1._id);
    console.log(formData);
    console.log("*************************");
    const response = await axios.post('http://localhost:5000/upload', formData);
    console.log('Image uploaded:', response.data.secure_url);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    // const data = response.data.secure_url;
    // console.log(data);
    // // Dispatch the image data to the Redux store
    // await dispatch(addImage(data));
    // navigate('/profile')
    window.location.reload();
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};
