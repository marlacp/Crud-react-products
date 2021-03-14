import React from 'react';
import './style/style-login.css'
const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAcoount,
        emailError,
        passwordError,
    } = props;

    return(
        <section className='login'>
            <div className="loginContainer">
                <label htmlFor="">Please write an email</label>
                <input type="text"
                    autoFocus
                    required
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label htmlFor="">Password</label>
                <input type="password"
                    required
                    value={password}
                    onChange= {(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    { hasAccount ? (
                        <>
                        <button  className="buttoncredentials" onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ? 
                        <span onClick={() => setHasAcoount(!hasAccount)}>Sign up</span> </p>
                        </>
                    ) : (
                       <>
                        <button className="buttoncredentials" onClick={handleSignup} >Sign up</button>
                        <p> Have an account ? 
                        <span onClick={() => setHasAcoount(!hasAccount)}>Sign in</span></p>
                       </> 

                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;