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

   const [inFavorite, setInFavorite] = useState(false)


   const dispatch = useAppDispatch();
   const { favoriteMovies } = useAppSelector(
      (state) => state.movieFavoriteReducer
   );

   // if(favoriteMovies.find((favoriteMovie) => (favoriteMovie as any)?.movie.imdbID === movie?.movie.imdbID))
   //    return setInFavorite(true)
   // else setInFavorite(false)

//   function addMovies (){

//      dispatch(addToFavourites(movie?.movie))
//      setInFavorite(true)
//   }

//    function deleteMovies() {
//       dispatch(deleteMovie(movie?.movie))
//       setInFavorite(false)
//    }

      // if (favoriteMovies.find((favoriteMovie) => (favoriteMovie as any).movie?.imdbID == movie.movie?.imdbID)){
      //    setInFavorite(true)}
      // else setInFavorite(false)
   

   // for favourite-button
   
  // setInFavorite(true)
   return (
      <>
         {!favoriteMovies.find((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID
         ) ? (
            <div onClick={() => dispatch(addToFavourites(movie?.movie))}>
               <i className="fa-regular fa-heart fa-2xl"></i>
            </div>
         ) : null}

         {favoriteMovies.find((favoriteMovie) => favoriteMovie.imdbID === movie.imdbID
         ) ? (
               <div onClick={() => dispatch(deleteMovie(movie?.movie))}>
                  <i className="fa-solid fa-heart fa-2xl"></i>
               </div>
         ) : 
         //    <div onClick={() => dispatch(deleteMovie(movie?.movie))}>
         //       <i className="fa-solid fa-heart fa-2xl"></i>
         //    </div>
         // )
         null
      }
      </>
   );
};


export default ButtonForFavourites;