import React, { useEffect } from 'react';
import './homepage.css';
import '../layout/layout.css';
import MovieResult from '../../components/movieResult/SearchingResult';
import { NavLink} from 'react-router-dom';

import { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { useAppDispatch } from '../../hooks/redux';
import { MovieSlice } from '../../redux/reducers/MovieSlice';
import { useDispatch } from 'react-redux';
import Recomendation from '../../components/recomendation/Recomendation';
// import { fetchMovies } from '../../redux/actions/actionCreator';

const Homepage = () => {


  return (
    <div>

      <div className='banner'>
        <div className='gradient'>
          <img src='/image/background.jpeg' className='banner-ImgBackground'></img>
          <div className='container'>
            <div className='banner-header'>
              <h3>Information about movies and series</h3>
              <h3 className='banner-header-h3'>for free</h3>
            </div>
              <NavLink to='/search' className='banner-btn-tosearch'>To start searching</NavLink>
          </div>
        </div>
      </div>
      
      <div className="recomendation">
        <Recomendation></Recomendation>
      </div>

    </div>
  )
}

export default Homepage

