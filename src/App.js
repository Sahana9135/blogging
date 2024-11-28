// import logo from './logo.svg';
import './App.css';
import {  Route , Routes } from 'react-router-dom';
import Front from './Components/Main/Content/Front';
import ContactUs from './Components/Menu/Contact/ContactUs';
import Signin from './Components/Sign/Signin';
import Goog from './Components/Sign/Google/Goog';
import Face from './Components/Sign/Facebook/Face';
import Mail from './Components/Sign/Email/Mail';
import NewAccount from './Components/Sign/Account/NewAccount';
import Login from './Components/Log/Login';
import Aboutus from './Components/Menu/About/Aboutus';
import Service from './Components/Menu/Services/Service';
import Blogs from './Components/Menu/Blog/Blogs';
import Posts from './Components/Menu/Blog/PostDetail';

function App() {
  return (
    <div className="App">
      
      <>
        <Routes>
        <Route path='/' element={<Front />} />
        <Route path='/blog' element={<Blogs/>} />
        <Route Path="/post/:id" element={<Posts />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/service' element={<Service />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/google" element={<Goog />} />
        <Route path="/facebook" element={<Face />} />
        <Route path="/email" element={<Mail />} />
        <Route path="/newaccount" element={<NewAccount />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
