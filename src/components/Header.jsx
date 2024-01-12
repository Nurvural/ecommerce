import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header({user, handleLogOut}) {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">Shirt Design</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Anasayfa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Gömlek</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Sepet</NavLink>
            </li>
     
            {user ? (
             <>
            
              <button className="nav-link" onClick={handleLogOut}>
                Logout ({user.name})
              </button>
             </>
            ) : (
              <NavLink className="nav-link" to="/login">
                Giriş Yap{" "}
              </NavLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
