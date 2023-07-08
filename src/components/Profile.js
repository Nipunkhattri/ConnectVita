import React from 'react'
import logo from '../assests/my image.jpeg';
import {AiOutlineEdit} from "react-icons/ai"
import { useNavigate } from 'react-router';
const Profile = () => {
    const navigate = useNavigate()
    const handlenavigate1 = () =>{
        navigate('/profile/form1')
    }
  return (
    <div className='w-7/12 ml-40  flex flex-col pt-16'>
      <div className='hei w-full rounded-xl bg-white'>
        <div className=' hdd w-full rounded-t'>
        <div className='h-40 top-32 left-10 w-40 rounded-full border-solid border-2 imgp  relative'>
        </div>
        </div>
        <div className='h-2/4 w-full flex'>
        <div className='h-full w-3/5 pt-11 pl-10 '>
            <h1 className='text-2xl font-semibold mt-2'>Nipun Khatri</h1>
            <p className='mt-1'>Freelance @MERN Stack Developer || Winner@WIENOVA'23 || Regional Finalist @Microsoft Imagine Cup Hackathon '23 || Blockchain Developer</p>
            <h2 className='mt-1 text-gray-500'>Jhansi, Uttar Pradesh, India</h2>
            <p className=''>500+ connections</p>
            <button className='h-10 w-24 rounded-2xl mt-2 text-white bg-blue-600'>Open to</button>
        </div>
        <AiOutlineEdit className='absolute top-30 edit' onClick={handlenavigate1}/>
        <div className='h-full  w-96 p-5 mt-10'> 
            <div className='h-20 w-80 flex justify-between items-center'>
            <img className='h-16 w-16' src={logo} alt="" />
            <h2 className='h-16 w-60 textsize1'>JSS ACADEMY OF TECHNICAL EDUCATION, NOIDA</h2>
            </div>
            <div className='h-20 w-80 flex justify-between items-center'>
            <img className='h-16 w-16' src={logo} alt="" />
            <h2 className='h-16 w-60 textsize1'>JSS ACADEMY OF TECHNICAL EDUCATION, NOIDA</h2>
            </div>
        </div>
        </div>
      </div>
      <div className='h-40 w-full mt-5 pt-6 pl-10 bg-white'>
      <AiOutlineEdit className='absolute top-29 right-4 edit' onClick={handlenavigate1}/>
        <h1 className='text-2xl font-medium '>About me</h1>
        <p className='mt-3'>I am a MERN web developer with in depth knowledge of react js and server side language and maintaining the database with mongo DB.. Skillful for creating a server and database with functionality and developing api's</p>
      </div>
      <div className='h-96 mt-5 w-full bg-white'>
        <div className='flex justify-between items-center pl-10 pr-3 w-full h-20 '>
          <div className=''>
          <h1 className='text-2xl font-medium'>Activity</h1>
          <h2>871 Followers</h2>
          </div>
          <div className='w-40 flex items-center justify-center'>
            <button className='text-xl border-2 border-blue-300 h-10 mr-7 rounded-md text-blue-400 w-40'>Create a post</button>
            <AiOutlineEdit className='absolute top-27 right-4 edit' onClick={handlenavigate1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
