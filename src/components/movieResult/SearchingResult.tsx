import { useState, useRef, useEffect } from "react";
// import cn from "classnames";
import debounce from "lodash.debounce";
import { useParams } from 'react-router-dom';
import './SearchingResult.css';
import { IMovieResult } from '../../interfaces/interface';
import { useAppSelector,useAppDispatch } from '../../hooks/redux';
// import { fetchMovieById } from '../../redux/actions/actionCreator';
import MovieDetail from "../movieDetail/MovieDetail";


const SearchingResult = (movie:any, search:string) => {

   const [newMovie, setnewMovie] = useState([]);
   const [isShowDetail, setShowDetail] = useState(false);
   const [imdbID, setImdbID] = useState()

   async function searchRequest( search:string, currentPage:number) {
      const URL = `https://omdbapi.com/?s=${search}&apikey=3140da31&page=${currentPage}`;
      const res = await fetch(`${URL}`);
      const data = await res.json();
      // console.log(data.Search);
      setnewMovie(data.Search)
      if (data.Search)
         return data.Search
      else console.log('error')
   }

   const [currentPage, setCurrentPage] = useState(2);

   function ShowDetail(imdbID:any){
      setShowDetail(true);
      setImdbID(imdbID)
   }

   function nextPage (){
      setCurrentPage(currentPage + 1)
      searchRequest(movie.search, currentPage)
   }

  return (
    <div className='search-result'>
        <div className="container">
           <div className="search-result-content">
              <h3 className='search-result-title'>Searching results...</h3>

              <ul className="search-result-list">

               {movie?.movie?.map((item: IMovieResult) => (

                  <li className="search-result-list-item item" key={item.imdbID} onClick={() => ShowDetail(item.imdbID)}>
                     <div className="search-result-list-item-thumbnail">
                        <img src={(item.Poster != "N/A") ? item.Poster : "/image/no_image.jpg"} />
                     </div>
                     <div className="search-result-list-item-info">
                        <h3>{item.Title}</h3>
                        <p>Year: {item.Year}</p>
                     </div>
                     </li>
               ))}

                 {newMovie.map((item: IMovieResult) => (

                    <li className="search-result-list-item item" key={item.imdbID} onClick={() => ShowDetail(item.imdbID)}>
                       <div className="search-result-list-item-thumbnail">
                          <img src={(item.Poster != "N/A") ? item.Poster : "/image/no_image.jpg"} />
                       </div>
                       <div className="search-result-list-item-info">
                          <h3>{item.Title}</h3>
                          <p>Year: {item.Year}</p>
                       </div>
                    </li>
                 ))}
                 <div><button className="btn-next-page" onClick={()=>nextPage()}>NEXT PAGE</button></div>
               </ul>
               
              {isShowDetail ? 
              <div className="movie-detail-active">
                 <div onClick={() => setShowDetail(false)}>
                    <i className="fa-solid fa-xmark fa-2xl" ></i>
                 </div>
                 <MovieDetail movie={imdbID}></MovieDetail>
                 </div> : 
                 null}
            </div>
        </div>
    </div>
  )
}

export default SearchingResult
