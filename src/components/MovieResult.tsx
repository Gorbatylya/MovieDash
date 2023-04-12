import React from 'react';
import './MovieResult.css';
import '../pages/layout/layout.css';


const MovieResult = () => {
  return (
    <div className='movie-result'>
        <div className="container">
           
              <div className="result-content" id="result-content">
             
                 <div className="movie-poster">
                    <img src="/image/medium-cover.jpg" alt="movie poster" />
                 </div>
                 <div className="movie-info">
                    <h3 className="movie-title">Guardians of the Galaxy Vol. 2</h3>
                    <ul className="movie-misc-info">
                       <li className="year">Year: 2017</li>
                       <li className="rated">Ratings: PG-13</li>
                       <li className="released">Released: 05 May 2017</li>
                    </ul>
                    <p className="genre"><b>Genre:</b> Action, Adventure, Comedy</p>
                    <p className="writer"><b>Writer:</b> James Gunn, Don Abnett, Andy Lanning</p>
                    <p className="actors"><b>Actors: </b>Chris Pratt, Zoe Saldana, Dave Bautista</p>
                    <p className="plot"><b>Plot:</b> The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's ecounter with his father the ambitious celestial being Ego.</p>
                    <p className="language"><b>Language:</b> English</p>
                    <p className="awards"><b><i className="fas fa-award"></i></b> Nominated for 1 Oscar</p>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default MovieResult
