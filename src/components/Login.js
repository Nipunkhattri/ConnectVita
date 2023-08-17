import React,{useEffect, useState} from 'react'
import imgg from '../assests/linked.png'
import { useNavigate } from 'react-router'
import { useDispatch } from "react-redux";
import { authlogin } from '../redux/features/AuthSlice';
import { useSelector } from 'react-redux';

const Login = () => {
  const navigate  = useNavigate();
  const HandleRegister = () =>{
    navigate('/Register');
  }
  const {isAuthenticated}  = useSelector((state) => ({ ...state.auth }));
  console.log(isAuthenticated);
  useEffect(()=>{
    if(isAuthenticated != false){
      navigate('/');
    }
  },[])
  const dispatch = useDispatch();
  const [ldata,setldata] = useState({
    email:'',
    Password:''
  })

  const handleChange = (e) => {
    setldata({ ...ldata, [e.target.name]: e.target.value });
  };
  console.log(ldata)

  const handlelogin = (e) =>{
    e.preventDefault();
    dispatch(authlogin({ldata,navigate}));
  }
  return (
    <div  className='h-screen w-full pt-16 flex'>
      <div className='w-2/4 flex flex-col ml-28 mt-16'>
        <h1 className='font-text mb-10'>Find jobs through your community</h1>
        <div className=' w-full hei'>
            <div className='flex flex-col w-2/4'>
            <label htmlFor="" className=''>Email</label>
            <input type="text" className='inputt' value={ldata.email} onChange={handleChange} name='email'/>
            </div>
            <div className='flex flex-col w-2/4 mt-5'>
            <label htmlFor="">Password</label>
            <input type="text" className='inputt1' value={ldata.Password} onChange={handleChange} name="Password"/>
            </div>
            <button className='h-12 ml-4 mt-10 rounded-lg w-96 bg-blue-500 text-white text-lg' onClick={handlelogin}>Sign In</button>
            <div className='flex mt-5  items-center'>
            <hr  className='hrw h-0.5 text-black'/>
            or
            <hr  className='hrw h-0.5 text-black'/>
            </div>
            <button className='h-12 ml-4 mt-5 rounded-lg w-96 border-2 border-slate-500 text-md text-black'>Continue with Google</button>
            <button className='h-12 ml-4 mt-5 mb-10 rounded-lg w-96 border-2 border-slate-500 text-md text-black' onClick={HandleRegister}>New To Linkedin? Join Now</button>
        </div>
      </div>
      <div>
        <img src={imgg} className='mt-20' alt="" />
      </div>
    </div>
  )
}

export default Login
