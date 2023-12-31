import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector(state => state.auth.me.id)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className='nav-bar'>
      <div className='logo-container'>
        <img src='https://img.freepik.com/premium-vector/yellow-sign-with-goat-it_862489-2404.jpg' alt='goat' className='goat-logo'/>

      </div>

      <h1 className='nav-title'>SWEbay.</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">All Products</Link>
            <Link to={`/users/${userId}/cart`}>Cart</Link>

            <button className="logout-btn" type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/products">All Products</Link>
            <Link to={`/users/cart`}>Cart</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
