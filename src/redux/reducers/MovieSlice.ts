
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react"; 
import { isExpressionWithTypeArguments } from "typescript";
import { IMovie } from "../../interfaces/interface";
// import { fetchMovies } from "../actions/actionCreator";


interface MovieState {
   movie: IMovie[];
   isLoading: boolean;
   error: string;
   // count:number;
}

const initialState: MovieState = {
   movie: [],
   isLoading: false,
   error: '',
   // count: 0,
}


export const MovieSlice = createSlice( { //reducers
   name: 'movie', //everyone has unic name
   initialState, //default value of state is passed here
   reducers: { //as switch case
      },
   // extraReducers: {
   //    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<IMovie[]>)=> {
   //       state.isLoading = false
   //       state.error = '';
   //       state.movie = action.payload;
   //    },
   //    [fetchMovies.pending.type]: (state, action: PayloadAction<IMovie[]>)=> {
   //       state.isLoading = true
   //    },
   //    [fetchMovies.rejected.type]: (state, action: PayloadAction<Error>)=> {
   //       state.isLoading = false;
   //       state.error = action.payload.message;
   //    },
   // }

})

export default MovieSlice.reducer
