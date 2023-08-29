import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import './Imagepopupbox.css'; // Create this CSS file for styling
import { savedata } from '../redux/features/PostSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './BouncingLoader.css'; // Styles for the loader
const Imagepopupbox = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text,setText] = useState('');
  const [loading , setloading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({...state?.auth?.data?.data}));
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const data = {
    textwritten:text?text:'',
    Image:selectedFile?selectedFile:'',
    id:user?._id
  }

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText); // Update the text state when textarea content changes
  };
  console.log(data);

  const CustomToast = ({ message }) => (
    <div style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      {message}
    </div>
  );

  const handleSave = () =>{
    if(data.textwritten != '' && data.Image != ''){
      const formData = new FormData();
      formData.append('image',data.Image);
      formData.append('text',data.textwritten);
      formData.append('id',data.id);
      setloading(true);
      dispatch(savedata({formData,dispatch})).
      then(()=>{
        setloading(false);
        window.location.reload();
      }).catch((error)=>{
        console.log(error);
      });
    }
    else{
      toast(<CustomToast message="Please fill the details" />, {
        position: "top-center",
      });
    }
  }
  return (
    <div className="popup-container font-serif">
      <div className="popup-content">
      {loading ? 
         <div className="bouncing-loader-container">
         <div className="bouncing-loader">
           <div></div>
           <div></div>
           <div></div>
         </div>
       </div>
      : <div>{/* Render the fetched data */}</div>}
        <h1 className='text-2xl font-semibold italic'>Make A Post</h1>
        <button className="close-button" onClick={onClose}>
          <ImCross />
        </button>
        <textarea
          className="text-area"
          placeholder="Start Typing . . ."
          rows="4"
          cols="50"
          name='text'
          value={text}
          onChange={handleTextChange}
        />
        <div className="file-input-container">
          <label htmlFor="fileInput" className="custom-file-input">
            Choose File
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={handleImageChange}
            className="file-input"
          />
        </div>
        {selectedFile && (
          <div className="file-preview">
            {selectedFile.type.includes('image') ? (
              <img
                className="image-preview"
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
              />
            ) : (
              <video controls className="video-preview">
                <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Imagepopupbox;
