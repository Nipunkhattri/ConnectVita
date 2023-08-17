import React, { useState , useEffect } from 'react'
import { useDispatch } from "react-redux";
import { register } from '../redux/features/AuthSlice';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Register = () => {

  const navigate = useNavigate();
  const {isAuthenticated}  = useSelector((state) => ({ ...state.auth }));
  console.log(isAuthenticated);
  useEffect(()=>{
    if(isAuthenticated != false){
      navigate('/');
    }
  },[])
  const dispatch = useDispatch();
  const [rdata,setrdata] = useState({
    email:'',
    Password:''
  })

  const handleChange = (e) => {
    setrdata({ ...rdata, [e.target.name]: e.target.value });
  };

  console.log(rdata)

  const handleSignIn = (e) =>{
    e.preventDefault();
    dispatch(register({rdata,navigate}));
  }


  return (
    <div className='h-screen flex flex-col items-center justify-center w-full pt-16 bg-slate-500'>
      <h1 className='text-3xl mb-7'>Make the most of your professional life</h1>
      <div className='hei1'>
      <h2 className='text-3xl p-4'>Join Linkedin</h2>
      <input placeholder='Email' type="text" value={rdata.email} onChange={handleChange} name='email' className='h-12 pl-3 ml-5 rounded-md w-5/6 border-2 text-xl border-slate-400'/>
      <input placeholder='Password' type="text" value={rdata.Password} onChange={handleChange} name='Password' className='h-12 pl-3 mt-4 ml-5 rounded-md w-5/6 border-2 text-xl border-slate-400'/>
      <div className='flex justify-center items-center w-full p-6 text-center'>
        <p>By clicking Agree & Join, you agree to the LinkedIn <span className='text-blue-600'> User Agreement, Privacy Policy, and Cookie Policy.</span></p>
      </div>
      <button className='h-12 w-80 bg-blue-600 ml-8 text-white text-xl rounded-md' onClick={handleSignIn}>Agree & Join</button>
      <div className='flex mt-2 pl-6 pr-7 items-center'>
            <hr  className='hrw h-0.5 text-black'/>
            or
            <hr  className='hrw h-0.5 text-black'/>
            </div>
            <button className='h-12 mt-3 w-80 border-2 border-slate-400 ml-8 text-black text-lg rounded-md'>Continue with Google</button>
            <h1 className='text-center mt-3 text-md font-medium'>Already on LinkedIn?<span className='text-blue-600'>Sign in</span></h1>
      </div>
    </div>
  )
}

export default Register
