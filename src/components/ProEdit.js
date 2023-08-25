import React from 'react'
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"

const ProEdit = () => {
  const navigate = useNavigate();
    const { Pro } = useSelector((state) => ({...state?.auth}));
    const handleclick = (id) =>{
      navigate('/profile/form4/edit',{state:{id:id}})
    }
  return (
    <div className='expdiv w-2/4  ml-40 pt-24'>
    <div className='mb-5 w-full mt-5 bg-white'>
    <div className='flex items-center justify-between'>
  <h1 className='text-2xl pl-9 pt-4 font-semibold'>Projects</h1>
  <div>
  {/* <AiFillFileAdd className='absolute top-30  edit1 mr-20' onClick={handlenavigate4}/> */}  </div>
    </div>
    {
  Pro?.map((item,index)=>{
    return(
      <>
      <div  className='mb-5 w-full pl-9 pt-4'>
      <AiOutlineEdit className='edit7' onClick={()=>handleclick(item._id)}/>
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
</div>
  )
}

export default ProEdit
