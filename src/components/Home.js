import React, { useState } from 'react'
import logo from '../assests/my image.jpeg';
import './Navbar.css'
import {AiFillCodeSandboxSquare} from "react-icons/ai"
import {BsFillBookmarkFill} from "react-icons/bs"
import {BsCardImage} from "react-icons/bs"
import {BsCalendarEvent} from "react-icons/bs"
import {BiSolidVideos} from "react-icons/bi"
import {GrArticle} from "react-icons/gr"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {AiFillPlusCircle} from "react-icons/ai"
import {ImCross} from "react-icons/im"
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentDots} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { getdata } from '../redux/features/AuthSlice';
import Imagepopupbox from './Imagepopupbox';
import { fetchpost } from '../redux/features/PostSlice';
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const {isAuthenticated}  = useSelector((state) => ({ ...state.auth }));
  const { user } = useSelector((state) => ({...state?.auth?.data?.data}));
  const { post } = useSelector((state)=>({...state?.Post}))
  console.log(post);
  const _id = user?._id;
  useEffect(()=>{
    dispatch(fetchpost());
  },[])
  useEffect(()=>{
    console.log(_id);
    dispatch(getdata(_id));
    },[])
  console.log(isAuthenticated);
  useEffect(()=>{
    if(isAuthenticated == false){
      navigate('/login');
    }
  },[])

  const handlenavigate =(id) =>{
    
  }
  return (
    <>
    <div className=' w-full flex bg-Homecolor pt-16'>
      <div className='wwd h-full flex mt-5 mr-5 items-end flex-col'>
        <div className='h-2/3 leftup w-7/12 bg-white rounded-2xl'>
          <div className='h-16 w-full rounded-t-lg bg-black'>
              <img src={user?user?.image:logo} alt="" className='h-20 w-20 relative top-6 left-20 rounded-full bg-slate-300'/>
          </div>
          <div className='h-3/5 w-full flex flex-col mt-5 items-center mid bg-white'>
            <br />
            <h2 className='text-lg mb-1'>{(user?.FirstName)?(user.FirstName):''} {user?.lastname?user.lastname:''}</h2>
            <p className='text-center text-slate-500'>{user?.headline?user?.headline:""}</p>
            <br />
            <hr className='w-full h-2 text-black'/>
            <div className='flex justify-around w-full mb-1 mt-2 cursor-pointer'>
              <h3 className='text-slate-500'>Who's viewed your profile</h3>
              <h3 className='text-blue-700'>79</h3>
            </div>
            <div className='flex justify-around w-full cursor-pointer'>
              <h3 className='text-slate-500'>Impressions of your post</h3>
              <h3 className='text-blue-700'>3289</h3>
            </div>
            <br />
            <hr className='w-full h-2 text-black'/>
            <div className=' w-full p-2'>
              <h3 className='text-xs text-slate-400'>Access exclusive tools & insights</h3>
              {/* <img src="" alt="" /> */}
              <div className='flex'>
              <AiFillCodeSandboxSquare className='text-2xl'/>
              <h3 className='underline font'>Get Hired faster .Try Premium free</h3>
              </div>
            </div>
          </div>
            <hr className='w-full h-2 text-black'/>
            <div className='flex ml-5 h-6 items-center cursor-pointer'>
              <BsFillBookmarkFill className='text-slate-500'/>
              <h2 className='ml-3 font'>My Items</h2>
            </div>
        </div>
      </div>
      <div className=' divv'>
        <div className='wd h-36 m-5 bg-white'>
            <div className='w-full hsdd flex items-center h-3/6 '>
              <img className='hd' src={user?user?.image:logo} alt="" />
              <input type="text" placeholder='Start a Post' className='h-3/5 with ml-3' name="" id="" />
            </div>
            <div className='w-full h-16 flex  items-center'>
              <div className='h-5/6 flex items-center pl-5 ww1 '  onClick={openPopup}>
                <BsCardImage className='text-xl'/>
                <h3 className='pl-3 text-s'>Photo</h3>
              </div>
              <div className='h-5/6 flex items-center pl-5 ww1 '>
                <BiSolidVideos className='text-xl'/>
                <h3 className='pl-3 text-s'>Video</h3>
              </div>
              <div className='h-5/6 flex items-center pl-5 ww1 '>
                <BsCalendarEvent className='text-xl'/>
                <h3 className='pl-3 text-s'>Event</h3>
              </div>
              <div className='h-5/6 flex items-center pl-5 ww1 '>
                <GrArticle className='text-xl'/>
                <h3 className='pl-3 text-s'>Article</h3>
              </div>
            </div>
        </div>
        <div className='w-full hhh '>
          <div className='width block m-auto h-full '>
          {
            post?.map((item,index)=>{
              return(
                <>
                <div className='h-20 w-full flex justify-between items-center' key={index}>
            <div className='w-60 h-full flex'>
              <img src={item?.image} onClick={()=>handlenavigate(item.id)} className='h-full w-20 p-1' alt="" />
              <div className='h-full w-40 flex ml-1 mt-1 flex-col'>
                <h1 className='text-lg'>{item?.name}</h1>
                <h1 className='text-gray-500'>18,085 followers</h1>
              </div>
            </div>
            <div className='h-full w-24 mr-2 items-center justify-center flex'>
              <h1 className='text-lg w-full h-10 rounded-xl cursor-pointer flex justify-center items-center text-blue-700'><AiFillPlusCircle className='mr-2 text-xl text-blue-500'/> Follow</h1>
            </div>
          </div>
          <div className='hi w-full'>
              <div className='h-16 p-1 text-s'>
                {item?.text}
              </div>
              <div className='divimg'>
              <img src={item?.PostVim} className='imagepost' alt="" />
              </div>
          </div>
          <div className='h-24 w-full '>
            <div className='h-8 p-1 mt-3 w-full flex justify-between'>
              <h2>122 Likes</h2>
              <h2>26 comments</h2>
            </div>
            <div className='h-16 w-full m-1 flex justify-around'>
              <div className='h-5/6 w-1/5 flex divl text-xl justify-center items-center'>
                <AiOutlineLike className='text-2xl mr-1'/>
                <h2 className='textsize1'>Like</h2>
              </div>
              <div className='h-5/6 w-3/12 flex divl text-xl justify-center items-center'>
                <FaRegCommentDots className='text-2xl mr-1'/>
                <h2 className='textsize1'>Comment</h2>
              </div>
              <div className='h-5/6 w-1/5 flex divl text-xl justify-center items-center'>
                <AiOutlineLike className='text-2xl mr-1'/>
                <h2 className='textsize1'>Repost</h2>
              </div>
              <div className='h-5/6 w-1/5 flex divl text-xl justify-center items-center'>
                <AiOutlineLike className='text-2xl mr-1'/>
                <h2 className='textsize1'>Send</h2>
              </div>
            </div>
          </div>
          </>
              )
            })
        }
          </div>
        </div>
      </div>
      <div className='w-2/5 h-full flex mt-5 ml-5  items-start flex-col'>
        <div className='h-2/3 leftup1 w-7/12 bg-white rounded-2xl'>
            <h1 className='mt-5 ml-5 text-xl mb-4'>Pending Requests</h1>
            <div className='flex items-center h-16 w-11/12 bg-slate-100 ml-5 justify-evenly'>
              <h2 className='text-lg'>Nipun khatri</h2>
              <div className='h-10 w-10 bg-slate-400 items-center flex justify-center rounded-full'>
                <AiOutlineCheckCircle className='text-2xl cursor-pointer'/>
              </div>
              <div className='h-10 w-10 bg-slate-400 items-center flex justify-center rounded-full'>
                <ImCross className='text-s cursor-pointer'/>
              </div>
            </div>
        </div>
      </div>
    </div>
    {popupVisible && <Imagepopupbox onClose={closePopup} />}
    </>
  )
}

export default Home
