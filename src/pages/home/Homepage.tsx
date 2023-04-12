import React from 'react';
import './homepage.css';
import '../layout/layout.css';
import MovieResult from '../../components/movieResult/MovieResult';

const Homepage = () => {
  return (
    <div>

      <MovieResult

      ></MovieResult>

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

