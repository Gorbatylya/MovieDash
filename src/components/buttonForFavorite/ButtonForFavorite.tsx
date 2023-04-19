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

   const [inFavorite, setInFavorite] = useState(false);

   const dispatch = useAppDispatch();
   const { favoriteMovies } = useAppSelector(
      (state) => state.movieFavoriteReducer
   );

   console.log(movie)

   // if(favoriteMovies.find((favoriteMovie) => (favoriteMovie as any)?.movie.imdbID === movie?.movie.imdbID))
   //    return setInFavorite(true)
   // else setInFavorite(false)

  function addMovies (){

     dispatch(addToFavourites(movie?.movie))
     setInFavorite(true)
  }

   function deleteMovies() {
      dispatch(deleteMovie(movie?.movie))
      setInFavorite(false)
   }
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
         {favoriteMovies.find((favoriteMovie) => (favoriteMovie as any).movie?.imdbID == movie.movie?.imdbID) ? (
            <div >
               <i className='fa-solid fa-heart fa-2xl' onClick={() => dispatch(deleteMovie(movie.movie))} ></i>
            </div>
         )
            : (<div className='favorite-button' >
                  <i className="fa-regular fa-heart fa-2xl" onClick={() => dispatch(addToFavourites(movie.movie))}></i>
               </div>)
         }
      </>
   );
};

export default ButtonForFavourites;