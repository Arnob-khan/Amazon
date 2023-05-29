import React, { useContext } from 'react';
import{Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/UserContext';



const Signup = () => {
    const {createUser}=useContext(AuthContext)
    const naviagte =useNavigate()
    const handleSubmit =(event)=>{
        event.preventDefault()
       const form = event.target;
       const email =form.email.value;
       const password =form.password.value;
       const confirmPassword=form.confirmPassword.value;
       console.log(email,password,confirmPassword)
       
       createUser(email,password)
       .then(result=>{
         const user =result.user
         console.log(user)
         form.reset();
         naviagte('/login')
       })
       .catch(error=>console.error(error))
    }
    return (
        <div className='container'>
        <div className="login-container">
           <h1 className='form-title'>Sign Up</h1>
           <form onSubmit={handleSubmit} >
              <div className="form-control">
                 <label htmlFor="email">Email</label>
                 <input type="email" name="email" id="" required />

                 <label htmlFor="password">Password</label>
                 <input type="password" name="password" id="" required />
                
                 <label htmlFor="password">Confirm Password</label>
                 <input type="password" name="confirmPassword" id="" required />

                 {/* <input className='btn-submit' type="submit" value='login' /> */}
                 <button type='submit' className='btn-submit'>Sign Up</button>
              </div>

           </form>


           <p className='link-text'>Already have a Account?Please <Link to='/login ' className='link-link'>Login</Link> </p>

           {/* <div className='line'>
               <hr className='hr-line' />
                        <p className='hr-text'>or</p>
               <hr className='hr-line' />
           </div>

           <button type='submit' className='btn-submit-google'> Continue with Google</button> */}
           

        </div>
   </div>
    );
};

export default Signup;