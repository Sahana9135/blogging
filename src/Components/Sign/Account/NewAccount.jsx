import React from 'react';
import './NewAccount.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NewAccount() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        } 
        else {
            setError('');
            console.log('Form submitted:', { email, newPassword });
            alert("You are Successfully Create your account.")
            navigate('/login');
        }

    };
    return (
        <>
        <section className="account-section" id='account-section'>
            <div className="acontainer">
                <h1>Explore World</h1>
                <div className="account-line"></div>
                <br /><br />
                <h3>Almost There</h3>

                <h2>Finish Creating Your Account</h2>
                <h2>for full expeience</h2>
                <br />
                <form className="box" onSubmit={handleSubmit}>

                    <input className="ip" type="email" name="email" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email" required />
                    <br />
                    <input className="ip" type="password" name='newPassword' id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Create password" required />
                    <br />
                    <input className="ip" type="password" name='confirmPassword' id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required placeholder="Confirm password" />
                    <br />
                    <p style={{ color: 'red' }}>{error}</p>
                    <br />
                    <button className="bg-btn">Create Account</button>

                    <br />
                    <div class="container" >
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>
                </form>
            </div>
            </section>
        </>
    )
}

export default NewAccount;