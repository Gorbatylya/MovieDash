import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './layout.css';
// import logo from "logo.jpg";

const Layout = () => {
  return (
    <>
    <div className='wrapper'>
        <header>
            <div className='container'>
              <div className='header-content'>
                <NavLink to='/' className='logo-wrap'><img src="/image/logo.jpg" alt="logo" className='logo'/></NavLink>
                <div className='header-menu'>
                <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Home</NavLink>
                <NavLink to='/movies' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Movies</NavLink>
                <NavLink to='/series' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Series</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Contact</NavLink>
            <NavLink to='/person' className={({ isActive }) => isActive ? 'active-link link-person' : 'linkPage link-person'}>
              Person
            </NavLink>
              </div>
            </div>
         </div>
        </header>

         <main >
           <div className='container'>
        <Outlet/> 
        {/* сюда вставляется все что находится в Layout в App */}
           </div>
        </main>
    </div>
        <footer>
         <div className='footer-content'>
              <div className='container'>
                  2023
              </div>
           </div>
         </footer>
     
    </>
  )
}

export default Layout
