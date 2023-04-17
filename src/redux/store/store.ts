import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import MovieInfo from './reducers/MovieInfo';
import MovieSlice from '../reducers/MovieSlice';

const rootReducer = combineReducers({
      MovieSlice
})

export const setupStore = () => configureStore({
      reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']