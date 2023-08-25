import React,{useState} from 'react'
import logo from '../assests/my image.jpeg';
import add from '../assests/992651.png';
import {AiOutlineEdit} from "react-icons/ai"
import {AiFillFileAdd} from "react-icons/ai"
import { useLocation, useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ImageUploadPopup from './ImageUploadPopup'; // Import the pop-up component
import {Link} from 'react-router-dom'
import { fetchexp, fetctPro, getdata } from '../redux/features/AuthSlice';
import { uploadImage } from '../redux/features/ImageThunk';
const Profile = ({Route}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [isImagePopupOpen, setImagePopupOpen] = useState(false);
    const location = useLocation();
    const handlenavigate1 = () =>{
        navigate('/profile/form1')
    }
    const handlenavigate2 = () =>{
        navigate('/profile/form2')
    }
    const {id} = useParams();
    const _id = id;
    const handlenavigate3 = () =>{
      navigate('/profile/form3');
    }
    const handlenavigate4 = () =>{
      navigate('/profile/form4');
    }
    const {isAuthenticated}  = useSelector((state) => ({ ...state.auth }));
    const { user } = useSelector((state) => ({...state?.auth?.data?.data}));
    const { exp } = useSelector((state) => ({...state?.auth}));
    const { Pro } = useSelector((state) => ({...state?.auth}));
    const image = useSelector(state => state?.auth?.image);
    console.log(image);
    console.log(user);
    console.log(exp);
    console.log(Pro);
    console.log(isAuthenticated);
    useEffect(()=>{
      if(isAuthenticated == false){
        navigate('/login');
      }
    },[])
    // const _id = user?._id;
    useEffect(()=>{
      console.log(_id);
      dispatch(getdata(_id));
      dispatch(fetchexp(_id));
      dispatch(fetctPro(_id));
    },[_id])

    const handleeditexp = () =>{
       navigate('/expEdit')
    }
    const handleEditPro = () =>{
      navigate('/ProEdit')
    }

    const handleImage  = () =>{
      setImagePopupOpen(true);
    }
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleImageUpload = (newImageFile) => {
      // Handle the image upload logic here
      // Dispatch an action or perform other necessary actions
      setImageFile(newImageFile);
      // Close the pop-up after successful upload
      setImagePopupOpen(false);
    };
  
    const upload = () =>{
        if (imageFile) {
            dispatch(uploadImage(imageFile,navigate));
        }
    }
    const handleImagePopupClose = () => {
      setImagePopupOpen(false);
    };
  return (
    <div className='w-7/12 ml-40  flex flex-col pt-16'>
      <ImageUploadPopup isOpen={isImagePopupOpen} onClose={handleImagePopupClose} onImageUpload={handleImageUpload} />
      <div className='hei w-full rounded-xl bg-white'>
        <div className='hdd w-full rounded-t'>
        {/* <div className='h-40 top-32 left-10 w-40 rounded-full border-solid border-2 imgp  relative'>
        </div> */}
         <div className='h-40 top-32 left-10 w-40 rounded-full border-solid border-2 imgp1  relative'>
          {
            user?.image != null?
            <img src={user?.image} className='cursor-pointer imagge' alt="" onClick={handleImage}/>
            :
            <img src={add} className='h-20 cursor-pointer imagge' alt="" onClick={handleImage}/>
          }
          {/* <input type="file"  className='h-20 cursor-pointer imagge' accept="image/*" onChange={handleImageUpload} /> */}
        </div>
        </div>
        {user?.headline != undefined  ?
          <div className='h-2/4 w-full flex'>
          <div className='h-full w-3/5 pt-14 pl-10 '>
            <h1 className='text-2xl font-semibold mt-2'>{(user?.FirstName)?(user.FirstName):''} {user?.lastname?user.lastname:''}</h1>
              <p className='mt-1'>
                {user?.headline?user?.headline:""}
              </p>
              <h2 className='mt-1 text-gray-500'>{user?.City?user?.City:''},{user?.Country?user?.Country:''}</h2>
              <p className=''>500+ connections</p>
              <button className='h-10 w-24 rounded-2xl mt-2 text-white bg-blue-600'>Open to</button> 
          </div>
          <AiOutlineEdit className='absolute top-30 edit' onClick={handlenavigate1}/>
          <div className='h-full  w-96 p-5 mt-10'> 
              <div className='h-20 w-80 flex justify-between items-center'>
              <img className='h-14 w-16' src={logo} alt="" />
              <h2 className='h-16 w-80 tracking-wide ml-2 mt-4 text-base uppercase'>{user?.Education?user?.Education:""}</h2>
              </div>
              <div className='h-20 w-80 flex justify-between items-center'>
              <img className='h-14 w-16' src={logo} alt="" />
              <h2 className='h-16 w-80 tracking-wide ml-2 mt-4 text-base uppercase'>{user?.CurrentPos?user?.CurrentPos:''}</h2>
              </div>
          </div>
          </div> 
          :
          <div className='h-2/4 w-full  flex items-center justify-center'>
        <button className='h-10 w-40 rounded-2xl mt-2 hover:bg-slate-300 text-black border-2 border-black' onClick={handlenavigate1}>Add Your details</button> 
        </div>
        }
      </div>

      {
        user?.About != undefined?
       <div className='h-40 w-full mt-5 pt-6 pl-10 bg-white'>
      <AiOutlineEdit className='absolute top-29 right-4 edit' onClick={handlenavigate2}/>
        <h1 className='text-2xl font-medium '>About me</h1>
        <p className='mt-3'>{user.About?user.About:""}</p>
      </div> 
      :
      <div className='h-40 w-full mt-5 pt-6  bg-white '>
      <h1 className='text-2xl font-medium pl-10'>About me</h1>
      <div className='flex items-center justify-center'>
      <button className='h-10 w-44 rounded-2xl mt-2 hover:bg-slate-300 text-black border-2 border-black' onClick={handlenavigate2}>Write about Yourself</button>  
      </div>
      </div>
      }
      {/* <div className=' mt-5 w-full bg-white'>
        <div className='flex justify-between items-center pl-10 pr-3 w-full h-20 '>
          <div className=''>
          <h1 className='text-2xl font-medium'>Activity</h1>
          <h2>871 Followers</h2>
          </div>
          <div className='w-40 flex items-center justify-center'>
            <button className='text-xl border-2 border-blue-300 h-10 mr-3 rounded-md text-blue-400 w-40'>Create a post</button>
          </div>
        </div>
        <div className='h-36 ml-10 w-full mt-4'>
        <h1 className='text-slate-500'>Nipun khatri posted this. 5 mon</h1>
        <div className='h-full flex mt-2'>
          <img src={logo} className='h-20 w-20 mr-4' alt="" />
          <div className='w-96 '>
            <h1>#connections</h1>
            <p>I am Glad to share you that our Team Org has once more trilled
out to next Level!..</p>
          </div>
        </div>
        </div>
        <ul className='w-10/12 ml-10 h-1 bg-slate-200'></ul>
        <div className='h-36 ml-10 w-full mt-4'>
        <h1 className='text-slate-500'>Nipun khatri posted this. 5 mon</h1>
        <div className='h-full flex mt-2'>
          <img src={logo} className='h-20 w-20 mr-4' alt="" />
          <div className='w-96 '>
            <h1>#connections</h1>
            <p>I am Glad to share you that our Team Org has once more trilled
out to next Level!..</p>
          </div>
        </div>
        </div>
        <ul className='w-10/12 ml-10 h-1 bg-slate-200'></ul>
        <div className='h-36 ml-10 w-full mt-4'>
        <h1 className='text-slate-500'>Nipun khatri posted this. 5 mon</h1>
        <div className='h-full flex mt-2'>
          <img src={logo} className='h-20 w-20 mr-4' alt="" />
          <div className='w-96 '>
            <h1>#connections</h1>
            <p>I am Glad to share you that our Team Org has once more trilled
out to next Level!..</p>
          </div>
        </div>
        </div>
        <ul className='w-full  h-1 bg-slate-100'></ul>
        <button className='h-10 w-full '>See All Posts </button>
      </div> */}
      <div className=' mt-5 w-full bg-white'>
      <div className='flex justify-between items-center pl-10 pr-3 w-full h-20 '>
          <div className=''>
          <h1 className='text-2xl font-medium'>Activity</h1>
          <h2>871 Followers</h2>
          </div>
        </div>
        <h1 className='text-xl font-medium text-center mb-2'>No Post Yet !..</h1>
      </div>
{
  exp != null?
  <>
    <div className=' mt-5 w-full bg-white'>
    <div className='h-30 w-full  flex'>
  <h1 className='text-2xl pl-9 pt-3 font-semibold'>Experience</h1>
  <AiFillFileAdd className='absolute top-30  edit1 mr-20' onClick={handlenavigate3}/>
  <AiOutlineEdit className='absolute top-30 edit' onClick={handleeditexp}/>
    </div>
  {
   exp?.map((item,index)=>{
    return(
      <>
      <div className='mb-5 w-full flex pl-9 pt-4'>
        <img src={logo} className='h-20 w-20 mr-4' alt="" />
        <div>
          <h1 className='text-lg font-medium'>{item.title}</h1>
          <h3>{item.Company} · {item.type}</h3>
          <h4 className='text-slate-400 text-sm'>Apr 2022 - Present · 1 yr 4 mos</h4>
        </div>
      </div>
      <ul className='w-10/12 ml-10 h-1 bg-slate-100'></ul>
      {/* <div className='mb-5 w-full flex pl-9 pt-4'>
        <img src={logo} className='h-20 w-20 mr-4' alt="" />
        <div>
          <h1 className='text-lg font-medium'>Web Developer</h1>
          <h3>Microsoft Mobile Innovation Lab · Part-time</h3>
          <h4 className='text-slate-400 text-sm'>Apr 2022 - Present · 1 yr 4 mos</h4>
        </div>
      </div>
      <ul className='w-10/12 ml-10 h-1 bg-slate-100'></ul>
      <div className='mb-5 w-full flex pl-9 pt-4'>
        <img src={logo} className='h-20 w-20 mr-4' alt="" />
        <div>
          <h1 className='text-lg font-medium'>Web Developer</h1>
          <h3>Microsoft Mobile Innovation Lab · Part-time</h3>
          <h4 className='text-slate-400 text-sm'>Apr 2022 - Present · 1 yr 4 mos</h4>
        </div>
      </div> */}
      </>
    )
  })
}
</div>
  </>
  :
  <div className=' mt-5 w-full bg-white'>
      <div className='h-30 w-full  flex'>
      <h1 className='text-2xl pl-9 pt-3 font-semibold'>Experience</h1>
        </div>
        <div className='flex justify-center items-center'>
        <button className='h-10 w-44 rounded-2xl mt-2 mb-2 hover:bg-slate-300 text-black border-2 border-black' onClick={handlenavigate3}>Add an Experience</button>  
        </div>
      </div> 
}
{
  Pro != null ?
  <div className='mb-5 w-full mt-5 bg-white'>
    <div className='flex items-center justify-between'>
  <h1 className='text-2xl pl-9 pt-4 font-semibold'>Projects</h1>
  <div>
  <AiFillFileAdd className='absolute top-30  edit1 mr-20' onClick={handlenavigate4}/>
  <AiOutlineEdit className='absolute top-30 edit' onClick={handleEditPro}/>
  </div>
    </div>
    {
  Pro?.map((item,index)=>{
    return(
      <>
      <div  className='mb-5 w-full pl-9 pt-4'>
        <h1 className='text-xl font-medium'>{item.ProjectName}</h1>
        <h3 className='text-slate-400 mb-4'>Mar 2023 - Mar 2023</h3>
        <button className='h-10 rounded-md mb-4 w-40 border-2 border-black'><Link target='_blank' to={item.ProjectLink}>Show Project</Link></button>
        <p className='text-md w-10/12'>{item.AboutP}</p>
      </div>
      <ul className='w-10/12 ml-10 h-1 bg-slate-200'></ul>
      </>
    )
  })
}
</div> 
  :
      <div className='mb-5 w-full mt-5 bg-white'>
      <div className='h-30 w-full  flex'>
      <h1 className='text-2xl pl-9 pt-3 font-semibold'>Projects</h1>
        </div>
        <div className='flex justify-center items-center'>
        <button className='h-10 w-44 rounded-2xl mt-2 mb-2 hover:bg-slate-300 text-black border-2 border-black' onClick={handlenavigate4}>Add a Project</button>  
        </div>
      {/* <h1 className='text-xl font-medium text-center mb-2'>Add a Project</h1> */}
      </div>
  }
    </div>
  )
}

export default Profile
