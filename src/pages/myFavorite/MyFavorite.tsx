import React from 'react';
import '../layout/layout.css';
import '../home/homepage.css';
import Favorite from '../../components/favorite/Favorite';


const MyFavorite = () => {
  return (
    <div>
      <div className="container">
      <Favorite></Favorite>
      </div>
    </div>
  )
}

export default MyFavorite
