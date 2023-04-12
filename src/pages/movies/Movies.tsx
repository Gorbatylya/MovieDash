import React from 'react';
import '../layout/layout.css';
import '../home/homepage.css';

const Movies = () => {
  return (
    <div>
      
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

export default Movies
