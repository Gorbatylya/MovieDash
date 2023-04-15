import React from 'react';
import './homepage.css';
import '../layout/layout.css';
import MovieResult from '../../components/movieResult/MovieResult';


import { RootState } from '../../redux/store/store';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { useAppDispatch } from '../../hooks/redux';
import { UserSlice } from '../../redux/reducers/UserSlice';
import { useDispatch } from 'react-redux';

const Homepage = () => {

  const { count } = useAppSelector(state => state.userReducer)
  const { increment } = UserSlice.actions
  const dispatch = useAppDispatch()

  console.log(increment(5))

  return (
    <div>

      <MovieResult

      ></MovieResult>

      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment(10))}>INCREMENT</button>
      {/* <button>D</button> */}

      <div className='banner'>
        <div className='gradient'>
          <img src='/image/background.jpeg' className='banner-ImgBackground'></img>
          <div className='container'>
            <h3 className='banner-header'>
              Здесь могла быть Ваша реклама
            </h3>
          </div>
        </div>
      </div>

      <div className='blokSearch'>
        <div className='container'>
          <div className='blokSearch__content'>
            <div className='input-search-wrap'>
              <h2 className='search-header'>Search Movies:</h2>
              <input className='input-search' placeholder='Search Movie Title...'></input>
            </div >

            <div className='film-card'>
              <h2>Много всего</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Homepage

