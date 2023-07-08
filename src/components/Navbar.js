import React,{useState} from 'react'
import link from "../assests/linkedin.png"
import {AiOutlineSearch} from "react-icons/ai"
import {AiFillHome} from "react-icons/ai"
import {BsFillPeopleFill} from "react-icons/bs"
import {FaSuitcase} from "react-icons/fa"
import {AiOutlineMessage} from "react-icons/ai"
import {IoMdNotifications} from "react-icons/io"
import {BsFillPersonFill} from "react-icons/bs"
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const linkStyle = (link) => ({
    color: link === activeLink ? 'black' : '#666666',
    borderBottom:link === activeLink ? '2px solid black' : 'none',
  });

  console.log(isInputFocused);
  const inputStyle = {
    backgroundColor: isInputFocused ? 'white' : 'white',
    // border:isInputFocused? '2px s':'none'
  };

  return (
    <div style={inputStyle} className='h-14 w-full fixed border-b-2 flex z-10'>
      <div className='h-full w-5/12 flex items-center justify-center'>
        <img className='h-8 w-8' src={link} alt="" />
        <AiOutlineSearch className='relative left-6 text-lg font-extrabold text-slate-500'/>
        <input onFocus={handleInputFocus}
      onBlur={handleInputBlur} type="text"  placeholder='Search' className='place h-9 w-72 pl-8 focus:outline-none  rounded-sm border-0 bg-navinput' />
        {/* <input className='h-10 w-80 rounded-xl bg-slate-900'></input> */}
      </div>
      <div className='flex justify-evenly w-5/12 items-center'>
        <Link to='/' style={linkStyle('link1')}
        onClick={() => handleLinkClick('link1')} className='flex-col mt-2 flex w-14 items-center'>
        <AiFillHome className='text1 ml-1'/>
        <h1 className='text'>Home</h1>
        </Link>
        <Link  style={linkStyle('link2')}
        onClick={() => handleLinkClick('link2')} className='flex-col mt-2 flex items-center'>
        <BsFillPeopleFill className='text1 ml-1'/>
        <h1 className='text'>My Network</h1>
        </Link>
        <Link style={linkStyle('link3')}
        onClick={() => handleLinkClick('link3')}  className='flex-col mt-2 flex items-center'>
        <FaSuitcase className='text1 ml-1'/>
        <h1 className='text'>Jobs</h1>
        </Link>
        <Link style={linkStyle('link4')}
        onClick={() => handleLinkClick('link4')} className='flex-col mt-2 flex items-center'>
        <AiOutlineMessage className='text1 ml-1'/>
        <h1 className='text'>Message</h1>
        </Link>
        <Link style={linkStyle('link5')}
        onClick={() => handleLinkClick('link5')} className='flex-col mt-2 flex items-center'>
        <IoMdNotifications className='text1 ml-1'/>
        <h1 className='text'>Notification</h1>
        </Link>
        <Link  style={linkStyle('link6')}
        to='/profile'
        onClick={() => handleLinkClick('link6')} className='flex-col mt-2 flex w-14 items-center'>
        <BsFillPersonFill className='text1 ml-1'/>
        <h1 className='text'>Me</h1>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
