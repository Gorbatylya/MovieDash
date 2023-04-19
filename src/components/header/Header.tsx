import React, { useState, useEffect } from 'react';
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './header.css';
import useDebounce from '../../hooks/useDebounce';
import { IMovie } from '../../interfaces/interface';
import getMovie from '../../services';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { fetchMovies } from '../../redux/actions/actionCreator';
import HeaderInput from '../HeaderInput/HeaderInput';
// import movieDetailResult from '../movieResult/MovieResult'
import MovieResult from '../movieResult/SearchingResult';




// https://www.omdbapi.com/?s=thor&page=1&apikey=3140da31

// async function movieDetailResult(imdbID: any) {
//    const URL = `https://omdbapi.com/?i=${imdbID}&page=1&apikey=3140da31`;
//    const res = await fetch(`${URL}`);
//    const data = await res.json();
//    console.log(data.Search);

//    if (data.Search)
//       return data.Search
//    else console.log('error')

// }




const Header = () => {

  return (
    <div>
        {/* {isLoading && <h1>Loading</h1>}
        {error && <h1>{error}</h1>} */}
      {/* {JSON.stringify(movie, null, 2)} */}
        <header>
           <div className='container'>
              <div className='header-content'>
                 <NavLink to='/' className='logo-wrap'><img src="/image/logo.jpg" alt="logo" className='logo' /></NavLink>
                 <div className='header-menu'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Home</NavLink>
                    <NavLink to='/search' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Search</NavLink>
                    <NavLink to='/favourite' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>My Favourite</NavLink>
                    {/* <NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Contact</NavLink> */}
                 </div>

                 {/* <div className='header-search-input'> */}
                    {/* <input className='header-input' placeholder='Film, Series'  /> */}
                    {/* {isSearching && <div><i className="fa-regular fa-loader fa-spin"></i></div>} */}
                    {/* <div className='header-loop-wrap'><a className='fa-solid fa-magnifying-glass fa-lg header-loop'></a></div> */}

                    
                    {/* <div className="search-list-active" id="search-list" >
                       {/* {isError && <div className='notFound'>More letters</div>} */}

                       {/* {
                          result.map((item: IMovie) => (
                             <div className="search-list-item" 
                                 key={item.imdbID} 
                                >
                        <div className="search-item-thumbnail">
                           <img src={(item.Poster != "N/A") ? item.Poster : "/image/no_image.jpg"} className='img-poster'/>
                        </div>
                        <div className="search-item-info">
                          <h3>{item.Title}</h3>
                           <p>{item.Year}</p>
                       </div>
                      </div>
                    ))
                    }  */}
                 {/* </div> */}
                 <NavLink to='/person' className={({ isActive }) => isActive ? 'fa-regular fa-circle-user fa-2xl link-person' : 'fa-regular fa-circle-user fa-2xl'}>
                 </NavLink>
              </div>
           </div>
        </header>

    </div>
  )
}

export default Header
