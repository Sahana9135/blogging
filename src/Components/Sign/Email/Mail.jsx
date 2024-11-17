import React from 'react';
import './Mail.css'
import Alt from '../../Header/Alter/Alt';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Mail() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      alert("You are Sign into our Blog website. And Please Create your Account.")
      navigate('/newaccount');
      };
    return (
        <>
        <Alt />
        <section className='mail-section' id='mail-section'>
            <div className="econtainer">
                <form onSubmit={handleSubmit}>
                <h1><i class="fa-solid fa-envelope fa-xl"></i>&nbsp; &nbsp;Sign up with Email</h1>
                <br /><br /><br />
                <div className="eip">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" required/><br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your Password" required/>
                </div>
                <br /><br />
                <button>Sign in</button>
                </form>
            </div>

            <br /><br /><br /><br />
            </section>
        </>
    )
}

export default Mail;