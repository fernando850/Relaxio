import React from 'react';
import Navbar from './Navbar';
import FooterButtons from './Footer/FooterButtons';
import LogoBottom from './Footer/LogoBottom';
import '../styles/Login.css';

const Login = () => {
  return (

    <>
        <Navbar />
        
        <div className="login-page">
        

        <div className="login-container">
            <h2 className="login-header">Login</h2>
            <img src="/Images/logoRelaxio.png" alt="Relaxio Logo" className="login-logo" />
            <h3 className="signin-title">Sign in</h3>

            <form className="login-form">
            <label htmlFor="email">Email address:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <div className="login-options">
            <label>
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
            </label>
                <a href="#">Forgot your password?</a>
            </div>

            <div className="center-button">
                <button type="submit" className="login-button">Sign In</button>
                <p className="signup-link">New to relaxio? <a href="#">Create an account</a>
            </p>
            </div>
           
            </form>

           

            <p className="login-terms">
            This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
            </p>
        </div>


        <div className="footer-buttons">
            <FooterButtons />
        </div>
        
        <div className='logo-bottom'>
            <LogoBottom />
        </div>

        </div>

        
        

        

        
        
    </>
  );
};

export default Login;
