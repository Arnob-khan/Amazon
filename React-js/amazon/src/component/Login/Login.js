import React, { useContext } from 'react';
import{Link, useLocation, useNavigate} from 'react-router-dom'
import './Login.css'
import { AuthContext } from '../../context/UserContext';
const Login = () => {
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()
    let location =useLocation()
    let from =location.state?.from?.pathname || '/'
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password)

        login(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            form.reset();
            navigate(from,{replace:true})


        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='container'>
             <div className="login-container">
                <h1 className='form-title'>Login</h1>
                <form  onSubmit={handleSubmit}>
                   <div className="form-control">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="" required />

                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="" required />

                      {/* <input className='btn-submit' type="submit" value='login' /> */}
                      <button type='submit' className='btn-submit'>Login</button>
                   </div>

                </form>


                <p className='link-text'>New to Amazon? <Link to='/signup ' className='link-link'>Create New Account</Link> </p>

                <div className='line'>
                    <hr className='hr-line' />
                             <p className='hr-text'>or</p>
                    <hr className='hr-line' />
                </div>

                <button type='submit' className='btn-submit-google'> Continue with Google</button>
                

             </div>
        </div>
    );
};

export default Login;