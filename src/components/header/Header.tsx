import React, { useState, useEffect } from 'react';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './header.css';
import useDebounce from '../../hooks/useDebounce';
import { IMovie } from '../../interfaces/interface';
import getMovie from '../../services';
import MovieResult from '../movieResult/SearchingResult';





const Header = () => {

  return (
    <div>
        <header>
           <div className='container'>
              <div className='header-content'>
                 <NavLink to='/' className='logo-wrap'><img src="/image/logo.jpg" alt="logo" className='logo' /></NavLink>
                 <div className='header-menu'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Home</NavLink>
                    <NavLink to='/search' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Search</NavLink>
                    <NavLink to='/favourite' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>My Favourite</NavLink>
                 </div>

                 <NavLink to='/person' className={({ isActive }) => isActive ? 'fa-regular fa-circle-user fa-2xl link-person' : 'fa-regular fa-circle-user fa-2xl'}>
                 </NavLink>
              </div>
           </div>
        </header>

    </div>
  )
}

export default Header
