import React from 'react';
import {NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './header.css';





const Header = () => {

   // const [amount, setAmount] = useState(0);

   const { favoriteMovies } = useAppSelector(
      (state) => state.movieFavoriteReducer
   );

  return (
    <div>
        <header>
           <div className='container'>
              <div className='header-content'>
                 <NavLink to='/' className='logo-wrap'><img src="/image/logo.jpg" alt="logo" className='logo' /></NavLink>
                 <div className='header-menu'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Home</NavLink>
                    <NavLink to='/search' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Search</NavLink>
                    <NavLink to='/favourite' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>
                     <div className='page-amount'>
                     <h4>My Favourite </h4>
                     <p className='amount-favorite'>{favoriteMovies.length}</p>
                     </div>
                     </NavLink>
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
