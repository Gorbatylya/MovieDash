import React, { useEffect } from 'react';
import './movieDetail.css';
import ButtonForFavourites from '../buttonForFavorite/ButtonForFavorite';
// import ButtonForFavouritesDelete from '../buttonForFavorite/ButtonForFavorite';
import { IMovieResult } from '../../interfaces/interface';
import { useState } from 'react';

const MovieDetail = (imdbID:any) => {

   const [movie, setMovie] = useState<IMovieResult>();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      
      const URL = `https://omdbapi.com/?i=${imdbID.movie}&apikey=3140da31`;
      fetch(`${URL}`)
         .then(response => response.json())
         .then(data => setMovie(data))

      setTimeout(() => {
         setLoading(true)
      }, 600)

   }, [imdbID.movie])

  
   

   return ( 
   <>
         {loading  ? <div>
            <div>
            <div className="result-content" id="result-content" key={movie?.imdbID}>
               <div className="movie-poster">
                  <img src={(movie?.Poster !== "N/A") ? movie?.Poster : "/image/no_image.jpg"} alt="movie poster" />
               </div>
               <div className="movie-info">
                  <h3 className="movie-title">{movie?.Title}</h3>
                  <ul className="movie-misc-info">
                     <li className="year">Year: {movie?.Year}</li>
                     <li className="rated">Ratings: {movie?.Rating}</li>
                     <li className="released">Released: {movie?.Released}</li>
                  </ul>
                  <p className="genre"><b>Genre:</b> {movie?.Genre}</p>
                  <p className="writer"><b>Writer:</b>{movie?.Writer}</p>
                  <p className="actors"><b>Actors: </b>{movie?.Actors}</p>
                  <p className="plot"><b>Plot:</b>{movie?.Plot}</p>
                  <div className='info-heart'>
                     <div>
                        <p className="language"><b>Language:</b>{movie?.Language}</p>
                        <p className="awards"><b><i className="fas fa-award"></i></b>{movie?.Awards}</p>
                     </div>
                             <ButtonForFavourites movie={movie}></ButtonForFavourites>

                          </div>

                       </div>
                    </div>
               </div>   
         </div> : 
            <div className="result-content-loading">
               <h4 className='loading'>Loading...</h4>
            </div> 
      }
   </>
  
  )
}

export default MovieDetail
