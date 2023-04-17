import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/interface";
import { AppDispatch } from "../store/store";
import {MovieSlice} from "../reducers/MovieSlice";
import axios from "axios";
import getMovie from "../../services";


// export const fetchMovies = createAsyncThunk(
//    "movie/fetchSeacrh",
//    async (search: any, thunkAPI: any) => {
//       try {
//          const response = await getMovie.getAllBySearch(
//             search,
//             thunkAPI
//          );
//          return response;
//       } catch (error) {
//          return thunkAPI.rejectWithValue("Movie download failed");
//       }
//    }
// );

export const fetchMovieById = createAsyncThunk(
   "movie/fetchById",
   async ({ movieId }: any, thunkAPI: any) => {
      try {
         const response = await getMovie.getMovieById(movieId);
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue(
            "Loading information failed"
         );
      }
   }
);

export const fetchMovies = createAsyncThunk(
   "movie/fetchAll",
   async (_,thunAPI) => {
      try {
         const response = await getMovie.getAllBySearch()
         return response;

      } catch (error) {
         return thunAPI.rejectWithValue('Movie download failed')
   }
   }
    
)