import React from 'react';
import './favorite.css';
// import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IMovieResult } from '../../interfaces/interface';

const Favorite = () => {

   // const router = useHistory();
   const dispatch = useAppDispatch();
   const { favoriteMovies } = useAppSelector(
      (state) => state.movieFavoriteReducer
   );

  return (
    <div>
        <div className="favourite">
           <h3>My favorites:</h3>

           <div className="favourite-list">

              {favoriteMovies.length ? (
                 favoriteMovies.map((favouriteMovie: IMovieResult) => (
               <div className="favourite-list-item" key={favouriteMovie.imdbID}>
                 <div className="favourite-list-item-thumbnail">
                          <img src={favouriteMovie.Poster} />
                 </div>
                 <div className="favourite-list-item-info">
                     <h3>{favouriteMovie.Title}</h3>
                     <p>Year: {favouriteMovie.Year}</p>
                 </div>
              </div>
                 ))): (
                  <h3 className="favourites__nothing">Favorite movies not found</h3>
              )}
            {/* //   <div className="favourite-list-item">
            //      <div className="favourite-list-item-thumbnail">
            //         <img src="/image/medium-cover.jpg" />
            //      </div>
            //      <div className="favourite-list-item-info">
            //         <h3>Guardians of the Galaxy Vol. 2</h3>
            //         <p>Year: 2017</p>
            //      </div>
            //   </div>

            //   <div className="favourite-list-item">
            //      <div className="favourite-list-item-thumbnail">
            //         <img src="/image/medium-cover.jpg" />
            //      </div>
            //      <div className="favourite-list-item-info">
            //         <h3>Guardians of the Galaxy Vol. 2</h3>
            //         <p>Year: 2017</p>
            //      </div>
            //   </div>

            //   <div className="favourite-list-item">
            //      <div className="favourite-list-item-thumbnail">
            //         <img src="/image/medium-cover.jpg" />
            //      </div>
            //      <div className="favourite-list-item-info">
            //         <h3>Guardians of the Galaxy Vol. 2</h3>
            //         <p>Year: 2017</p>
            //      </div>
            //   </div> */}

            {/* //   <div className="favourite-list-item">
            //      <div className="favourite-list-item-thumbnail">
            //         <img src="/image/medium-cover.jpg" />
            //      </div>
            //      <div className="favourite-list-item-info">
            //         <h3>Guardians of the Galaxy Vol. 2</h3>
            //         <p>Year: 2017</p>
            //      </div>
            //   </div> */}


           </div>
        </div>
    </div>
  )
}

export default Favorite
