import React from 'react';
import './favorite.css';
// import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IMovieResult } from '../../interfaces/interface';
import { deleteMovie } from '../../redux/reducers/MovieFavoriteSlice';

const Favorite = () => {

   const dispatch = useAppDispatch();
   const { favoriteMovies } = useAppSelector(
      (state) => state.movieFavoriteReducer
   );

   

  return (
    <div>
      <div className="favourite">
        <h3 className="favourite-title">My favorites:</h3>

        <div className="favourite-list">
          {favoriteMovies.length ? (
            favoriteMovies.map((favouriteMovie: IMovieResult) => (
              <div className="favourite-list-item" key={favouriteMovie.imdbID}>
                <div className="favourite-list-item-thumbnail">
                  <img
                    src={
                      favouriteMovie.Poster !== "N/A"
                        ? favouriteMovie.Poster
                        : "/image/no_image.jpg"
                    }
                    alt="poster"
                  />
                </div>
                <div className="favourite-list-item-info">
                  <h3>{favouriteMovie.Title}</h3>
                  <p>Year: {favouriteMovie.Year}</p>
                </div>
                <div
                  className="btn-delete"
                  onClick={() => dispatch(deleteMovie(favouriteMovie))}
                >
                  <i className="fa-solid fa-xmark fa-2xl"></i>
                </div>
              </div>
            ))
          ) : (
            <h3 className="favourites__nothing">Favorite movies not found</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorite
