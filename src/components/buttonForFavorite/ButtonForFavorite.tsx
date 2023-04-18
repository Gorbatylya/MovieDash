import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { useAppDispatch } from "../../hooks/redux";
import {
   addToFavourites, deleteMovie
} from "../../redux/reducers/MovieFavoriteSlice";
import { useState } from "react";
import { IMovieResult } from "../../interfaces/interface";
// import {isFavorite} from '../../pages/search/Search'



const ButtonForFavourites = (movie:any) => {

   // const [inFavorite, setInFavorite] = useState(true);

   const dispatch = useAppDispatch();
   const { favoriteMovies } = useAppSelector(
      (state) => state.movieFavoriteReducer
   );

   console.log(movie)
//   function addMovies (){
//      dispatch(addToFavourites(movie))
//      setInFavorite(false)
//   }

//    function deleteMovies() {
//       dispatch(deleteMovie(movie))
//       setInFavorite(true)
//    }
      // function checkInFavorite(){
   //    if(!favoriteMovies.find((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID))
   //       return setInFavorite(true)
   //    else setInFavorite(false)
   // }
   // for favourite-button
   // const [inFavorite, setInFavorite] = useState(false)
  // setInFavorite(true)
   return (
      <>
         {!favoriteMovies.find((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID) ? (
            <div className='favorite-button' onClick={() => dispatch(addToFavourites(movie))}>
               <i className="fa-regular fa-heart fa-2xl"></i>
            </div>
         )
            : (<div onClick={() => dispatch(deleteMovie(movie))}>
               <i  className='fa-solid fa-heart fa-2xl'></i>
               </div>)
         }
      </>
   );
};

export default ButtonForFavourites;