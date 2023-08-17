import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';
import withAuth from './withAuth';
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {isAuthenticated}  = useSelector((state) => ({ ...state.auth }));

  return (
    <>
    <Navbar/>
    <ToastContainer/>
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/profile/form1' element={<Form1/>}/>
      <Route exact path='/profile/form2' element={<Form2/>}/>
      <Route exact path='/profile/form3' element={<Form3/>}/>
      <Route exact path='/profile/form4' element={<Form4/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
    </Routes>
    </>
    </>
  );
}

export default App;
