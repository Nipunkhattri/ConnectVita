import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Form1 from './components/Form1';

function App() {
  return (
    <>
    <Navbar/>
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/profile/form1' element={<Form1/>}/>
    </Routes>
    </>
    </>
  );
}

export default App;
