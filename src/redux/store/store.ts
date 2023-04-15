import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import MovieInfo from './reducers/MovieInfo';
import userReducer from '../reducers/UserSlice';

const rootReducer = combineReducers({
      userReducer
})

export const setupStore = () => configureStore({
      reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']