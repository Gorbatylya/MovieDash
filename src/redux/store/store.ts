import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import MovieInfo from './reducers/MovieInfo';
import MovieSlice from '../reducers/MovieSlice';
import MovieFavoriteSlice from '../reducers/MovieFavoriteSlice';

export const store = configureStore({
      reducer: {
            movieReducer: MovieSlice,
            movieFavoriteReducer: MovieFavoriteSlice,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;