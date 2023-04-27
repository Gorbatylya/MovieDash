import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import {
   addToFavourites, deleteMovie
} from "../../redux/reducers/MovieFavoriteSlice";
import { useState } from "react";



const ButtonForFavourites = (movie:any) => {

   const dispatch = useAppDispatch();
   // const { favoriteMovies } = useAppSelector(
   //    (state) => state.movieFavoriteReducer
   // );

   const [inFavorite, setInFavorite] = useState(true);


  function addMovies (){
     dispatch(addToFavourites(movie?.movie))
     setInFavorite(false)
  }

   function deleteMovies() {
      dispatch(deleteMovie(movie?.movie))
      setInFavorite(true)
   }

   return (
     <>
       {inFavorite ? (
         <div onClick={() => addMovies()}>
           <i className="fa-regular fa-heart fa-2xl"></i>
         </div>
       ) : (
         <div onClick={() => deleteMovies()}>
           <i className="fa-solid fa-heart fa-2xl"></i>
         </div>
       )}
     </>
   );
};


export default ButtonForFavourites;