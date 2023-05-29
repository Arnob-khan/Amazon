import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleBtn=()=>{
       logOut()
       .then(()=>{ console.log("lalalaaaaalala lalalaaaaaaaaaaaaala")})
       .catch(error=>console.log(error))
    }
    return (
        <nav className='nav-container'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/inventory">Inventory</Link>
                {user?.email ? 
                <Link type='button' onClick={handleBtn}>Logout</Link>
                 :
                 <>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                </>
                }
                
                

                 {/* <h4>{user.name}</h4> */}
            </div>
        </nav>
    );
};

export default Header;