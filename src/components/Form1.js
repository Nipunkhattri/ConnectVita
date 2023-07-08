import React from 'react'
import {ImCross} from "react-icons/im"
import { useNavigate } from 'react-router'

const Form1 = () => {
  const navigate = useNavigate();
  const handlereturn = () =>{
    navigate('/profile')
  }
  return (
    <div className='form1'>
      <div className='nikki bg-white border-2 rounded-md border-black '>
        <div className='flex justify-between ml-2 mr-3 items-center'>
        <h1 className='text-black font-medium text-2xl p-4'>Fill Personal Details</h1>
        <ImCross onClick={handlereturn} className='cursor-pointer'/>
        </div>
        <div  className='w-fullh-20 p-5'>
          <input type="text" placeholder='First Name' className='one border-2 h-10  mr-4 rounded-md' />
          <input type="text" placeholder='Last Name' className='two border-2 rounded-md h-10'/>
        </div>
        <div  className='w-full h-20 p-5 mt-5'>
          <input type="text" placeholder='Headline' className='w-full onee border-2 h-10  mr-4 rounded-md' />
        </div>
        <div  className='w-full  h-20 p-5 mt-5'>
          <input type="text" placeholder='Education' className='one  border-2 rounded-md h-10 w-2/5 mr-4' />
          <input type="text" placeholder='Country' className='two  border-2 rounded-md h-10 w-2/5'/>
        </div>
        <div  className='w-full  h-20 p-5 mt-5 '>
          <input type="text" placeholder='City' className='one   border-2 rounded-md h-10 w-2/5 mr-4' />
          <input type="text" placeholder='Current Position' className='two  border-2 rounded-md h-10 w-2/5'/>
          {/* <input type="text" placeholder='Last Name' className='two h-10 w-2/5'/> */}
        </div>
        <div className='w-full  h-20 flex items-center justify-center p-5 mt-5 '>
          <button className='h-10 w-60 bg-blue-400  border-2 rounded-md'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Form1
