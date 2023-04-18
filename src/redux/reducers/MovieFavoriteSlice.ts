import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, IMovieResult } from "../../interfaces/interface";


interface favoriteMoviestate {
   favoriteMovies: IMovieResult[];
}

const initialState: favoriteMoviestate = {
   favoriteMovies: []
};

export const MovieFavoriteSlice = createSlice({ //reducers
   name: 'FavoriteMovie', //everyone has unic name
   initialState, //default value of state is passed here
   reducers: { //as switch case
      addToFavourites(state, action: PayloadAction<IMovieResult>): any {
         if (
            !state.favoriteMovies.find(
               (favoriteMovie) => favoriteMovie.imdbID === action.payload.imdbID
            )
         ) {
            state.favoriteMovies = [action.payload, ...state.favoriteMovies];
         }
      },
      deleteMovie(state, action: PayloadAction<IMovieResult>) {
         state.favoriteMovies = state.favoriteMovies.filter(
            (favouriteMovie) => favouriteMovie.imdbID !== action.payload.imdbID
         );
      },

   }
})

export default MovieFavoriteSlice.reducer
export const { addToFavourites, deleteMovie} = MovieFavoriteSlice.actions;