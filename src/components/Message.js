import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getname } from '../redux/features/AuthSlice';
import image from '../assests/camera.png'

const Message = () => {
    const dispatch = useDispatch();
    const [names,setname] = useState(null);
    useEffect(()=>{
        dispatch(getname()).then((res)=>{
          console.log(res);
          setname(res.payload); 
        }).catch((error)=>{
          console.log(error);
        })
      },[]);
    
      console.log(names)

      const [data,setdata] = useState({
        image:'https://res.cloudinary.com/dlc1gcuag/image/upload/v1693235425/profile_images/ohxfwhgg58zxwqvndgeh.jpg',
        name:'Nipun Khatri'
      })

      const handleselect = (name,image) =>{
        console.log(name);
        setdata({...data,name:name,image:image})
      }
      console.log(data)
      console.log(data.image)
  return (
    <div className='h-screen flex w-full bg-slate-200 pt-14'>
    <div className='h-full w-96 bg-slate-600'>
    <h1 className='text-3xl font-medium font-serif pt-3 pl-3'>Chats</h1>
    <hr className='w-full h-1 bg-slate-500'/>
          {names?.map((item, index) => (
    <ul className="list">
            <li key={index} className='flex items-center text-xl font-serif' onClick={()=>handleselect(item?.name,item?.image)}> <img className='h-12 w-12 mr-3 image-chat' src={item?.image} alt="" /> {item?.name}</li>
        </ul>
          ))}
    </div>
    <div className='h-full w-full bg-slate-900'>
    <div className='w-full content border-2 border-black'>
    <div className='w-full h-12 bg-slate-50'>
    <li className='flex items-center text-xl font-serif'> <img className='h-12 w-12 mr-3 image-chat' src={data?.image} alt="" /> {data?.name}</li>  
    </div>
    </div>
    <div className='input-chat'>
    <textarea type="text" placeholder='Chat here ...' className=' h-full w-10/12 text-xl p-3'/>
    <button className='h-full w-52 text-2xl font-serif bg-blue-500'>Send</button>
    </div>
    </div>
    </div>
  )
}

export default Message
