import { createAsyncThunk } from "@reduxjs/toolkit";
import getMovie from "../../services";

export const fetchMovies = createAsyncThunk(
   "movie/fetchSeacrh",
   async ({ searchValue, currentPage }: any, thunkAPI: any) => {
      try {
         const response = await getMovie.getAllBySearch(
            searchValue,
            currentPage
         );
         return response;
      } catch (error) {
         return thunkAPI.rejectWithValue("Movie download failed");
      }
   }
);

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