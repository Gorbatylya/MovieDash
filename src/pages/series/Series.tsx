import React from 'react';
import '../layout/layout.css';
import '../home/homepage.css';


const Series = () => {
  return (
    <div>
      
      <div className='blokSearch'>
        <div className='container'>
          <div className='blokSearch__content'>
            <div className='input-search-wrap'>
              <h2 className='search-header'>Search Series:</h2>
              <input className='input-search' placeholder='Search Series Title...'></input>
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

export default Series
