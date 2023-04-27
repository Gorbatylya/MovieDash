import React, {useState, useEffect} from 'react';
import '../layout/layout.css';
import '../home/homepage.css';
import useDebounce from '../../hooks/useDebounce';
import { IMovie, IMovieResult } from '../../interfaces/interface';
import './search.css';
import ButtonForFavourites from '../../components/buttonForFavorite/ButtonForFavorite';
import SearchingResult from '../../components/movieResult/SearchingResult';


async function searchRequest(search: any) {
  const URL = `https://omdbapi.com/?s=${search}&apikey=3140da31`;
  const res = await fetch(`${URL}`);
  const data = await res.json();

  if (data.Search)
    return data.Search
}


const Movies = () => {

  const [search, setSearchTerm] = useState('');
  const [result, setResults] = useState([]);
  const [getItem, setGetItem] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movie, setMovie] = useState<IMovieResult>();
  const [movieDetail, setmovieDetail] = useState(false);
  // for modal window 
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false)

  function showResult(){
    if (isError || search === ''){
      return setIsShow(false)
    }
    else
    setIsShow(true)
  }

  async function loadMovieDetails(imdbID: any) {
    const URL = `https://omdbapi.com/?i=${imdbID}&apikey=3140da31`;
    const res = await fetch(`${URL}`);
    const data: IMovieResult = await res.json();
    if (data)
      return (setMovie(data),
        setmovieDetail(true))
  }

  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setGetItem(true);
        setIsShow(false);
        setLoading(false)
        searchRequest(debouncedSearchTerm).then(results => {
          
          if (results === undefined) {
            setIsError(true)
            setResults([])
            setLoading(true)
          }
          else {
            setResults(results)
            setIsError(false)
            setLoading(true)
          }
        });

      } else {
        setResults([]);
        setIsError(false)
        setGetItem(false)
      }
    },
    [debouncedSearchTerm]
  );

  return (
    <div className="blog-search">
      <div className="container">
        <div className="blog-search-content">
          <div className="search-film-card-wrap">
            <div className="blog-search-input-wrap">
              <div>
                <h2 className="blog-search-title">Search Movies:</h2>
              </div>

              <div>
                <div className="blog-search-input-loop">
                  <input
                    className="blog-search-input"
                    placeholder="Film, Series"
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div
                    className="blog-search-loop-wrap"
                    onClick={() => showResult()}
                  >
                    <a
                      className="fa-solid fa-magnifying-glass fa-lg search-loop"
                      href="#search-result"
                    ></a>
                  </div>
                </div>

                {getItem && (
                  <div className="blog-search-list">
                    <div
                      className="blog-search-list-active"
                      id="blog-search-list"
                    >
                      {isError && <div className="notFound">Nothing found</div>}
                      {loading ? (
                        result.map((item: IMovie) => (
                          <div
                            className="blog-search-list-item"
                            key={item.imdbID}
                            onClick={() => loadMovieDetails(item.imdbID)}
                          >
                            <div className="blog-search-item-thumbnail">
                              <img
                                src={
                                  item.Poster !== "N/A"
                                    ? item.Poster
                                    : "/image/no_image.jpg"
                                }
                                className="img-poster"
                                alt="poster"
                              />
                            </div>
                            <div className="blog-search-item-info">
                              <h3>{item.Title}</h3>
                              <p>{item.Year}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <h4 className="icon-loading">Loading...</h4>
                      )}
                    </div>
                    <div className="button-show-all">
                      <a onClick={() => showResult()} href="#search-result">
                        Show All
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="film-card">
              {movieDetail ? 
                  <div
                    className="result-content"
                    id="result-content"
                    key={movie?.imdbID}
                  >
                    <div className="movie-poster">
                      <img
                        src={
                          movie?.Poster !== "N/A"
                            ? movie?.Poster
                            : "/image/no_image.jpg"
                        }
                        alt="movie poster"
                      />
                    </div>
                    <div className="movie-info">
                      <h3 className="movie-title">{movie?.Title}</h3>
                      <ul className="movie-misc-info">
                        <li className="year">Year: {movie?.Year}</li>
                        <li className="rated">Ratings: {movie?.Rating}</li>
                        <li className="released">Released: {movie?.Released}</li>
                      </ul>
                      <p className="genre">
                        <b>Genre:</b> {movie?.Genre}
                      </p>
                      <p className="writer">
                        <b>Writer:</b>
                        {movie?.Writer}
                      </p>
                      <p className="actors">
                        <b>Actors: </b>
                        {movie?.Actors}
                      </p>
                      <p className="plot">
                        <b>Plot:</b>
                        {movie?.Plot}
                      </p>
                      <div className="info-heart">
                        <div>
                          <p className="language">
                            <b>Language:</b>
                            {movie?.Language}
                          </p>
                          <p className="awards">
                            <b>
                              <i className="fas fa-award"></i>
                            </b>
                            {movie?.Awards}
                          </p>
                        </div>
                        <ButtonForFavourites movie={movie} />
                      </div>
                    </div>
                  </div>
                 :
                  <div className="result-content" id="result-content">
                    <div className="movie-poster">
                      <img src="/image/new-movie2.jpg" alt="movie poster" />
                    </div>
                    <div className="movie-info">
                      <h3 className="movie-title">
                        Federico Chiesa - Back on Track
                      </h3>
                      <ul className="movie-misc-info">
                        <li className="year">Year: 2023</li>
                        <li className="rated">Ratings: 6.9/10</li>
                        <li className="released">Released: February 3, 2023</li>
                      </ul>
                      <p className="genre">
                        <b>Genre:</b> Documentary
                      </p>
                      <p className="writer">
                        <b>Writer:</b>Alessandro D'Ottavi
                      </p>
                      <p className="actors">
                        <b>Actors: </b>Edoardo Bandini, Fabrizio Borri, Lucia
                        Bramani
                      </p>
                      <p className="plot">
                        <b>Plot:</b>9 January 2022, the Stadio Olimpico in Rome.
                        30 minutes into the first half, Federico Chiesa
                        collapses to the ground, screaming in pain. He has torn
                        the cruciate ligament of his left knee. A ten-month
                        ordeal, during which Federico will have to rediscover
                        himself as a footballer and as a man, begins here. By
                        his side, his family, his teammates, the Juventus staff
                        and a precious new love
                      </p>
                      <div className="info-heart">
                        <div>
                          <p className="language">
                            <b>Language:</b>Italian
                          </p>
                          <p className="awards">
                            <b><i className="fas fa-award"></i></b>no information</p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
            </div>
          </div>

          {isShow ? (
            <div id="search-result">
              <SearchingResult movie={result} search={search} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies
