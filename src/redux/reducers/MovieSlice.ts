
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IMovieResult } from "../../interfaces/interface";
// import { fetchMovies } from "../actions/actionCreator";


interface MovieState {
  movie: IMovieResult[];
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


export const MovieSlice = createSlice({
  //reducers
  name: "movie", //everyone has unic name
  initialState, //default value of state is passed here
  reducers: {
    //as switch case
    addMovies(state, action: PayloadAction<IMovieResult>): any {
      if (
        !state.movie.find(
          (item) => item.imdbID === action.payload.imdbID
        )
      ) {
        state.movie = [action.payload, ...state.movie];
      }
    },
  },
});

export default MovieSlice.reducer
export const { addMovies } = MovieSlice.actions;
