import React from 'react';
import Favorite from '../../components/favorite/Favorite';
import './person.css';



const Person = () => {
  return (
    <div className="person">
      <div className="container">
        <div className='person-content'>
      
          <div className="account-name">
            <h3>NAME: Dasha</h3>
          </div>

          <Favorite />

        </div>

      </div>
    </div>
  )
}

export default Person
