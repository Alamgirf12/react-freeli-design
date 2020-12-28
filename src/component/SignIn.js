import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



function SignIn() {
    let history = useHistory();


    const [Email, SetEmail] = useState('');
    const [Pass, SetPass] = useState('');


    const changeEmail = (e) => {
        SetEmail(e.target.value);
    }

    const changePass = (e) => {
        SetPass(e.target.value);
    }

    const submitForm = () => { history.push('/connect') }



    return (
        <div style={{marginLeft:'400px'}}>
    <div className="centered-form__form">
        <form >
            <div className="logo_icon">
                <a href="/">
                    <img src="/Workfreeli_logo_full_connect.png" alt="workfreeli" style={{borderRadius:'4px',backgroundColor: '#023d67',marginTop:'50px'}} />
                </a>
            </div>
         
            <div className="hello-welcome-back">
                Hello! Welcome back.
            </div>
            <div className="sign-into-your-account">
                Sign into your account here
            </div>
       
                            <div className="form-field email-address">
                                <label>Email Address</label><br/>
                                <input type="text"  onChange={changeEmail} value={Email} placeholder="example@workfreeli.com" autocomplete="on" autofocus />
                            </div>
                            <div className="form-field password">
                                <label>Password</label>
                                <input type="password"  onChange={changePass} value={Pass} placeholder="Enter password" autocomplete="off" />
                            </div>
                            <div className="form-field forgotpass">
                                <div className="forgot-pass" style={{display: 'inline-block'}} onclick="window.location.href='/forgot-password';">Forgot Your Password ?</div>

                            </div>
                            <div className="remember-me">
                                <input type="checkbox"  className="HoverCheckbox"  />
                                <p>Remember me</p>
                            </div>
                            <div className="sign-in">
                                <button className="sendButton" onClick={submitForm} >Sign In</button>
                            </div>
                            
        </form>
    </div>

        
            
        </div>
    )
}

export default SignIn