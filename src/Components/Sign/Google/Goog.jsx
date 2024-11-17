import React from 'react';
import './Goog.css';
import Alt from '../../Header/Alter/Alt';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Goog() {
  const [formData, setFormData] = useState({
    email: "",
   
  });
  const navigate = useNavigate();

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  alert("You are Sign into our Blog Website. And Please Create your Account.")
  navigate('/newaccount');
  };
  return (
    <>
    <Alt />
        <div className="head">
                <h2><i class="fa-brands fa-google fa-xl"></i> &nbsp;&nbsp;&nbsp;Sign Up With Google</h2>
                <hr />
            </div>
            
            <section className='google-section' id='google-section'>
            <div className="gcontainer">
                <h1>Choose your account</h1>
                <br />
                  <form onSubmit={handleSubmit}>
                <div className="gip">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your mail id" required />
                    <br />
                    
                </div>
                <br />
                <button>Sign in</button>
                </form>
            </div>
            </section>

    </>
  )
}

export default Goog;