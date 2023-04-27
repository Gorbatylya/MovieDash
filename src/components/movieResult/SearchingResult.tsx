import { useState} from "react";
import './SearchingResult.css';
import { IMovieResult } from '../../interfaces/interface';
import MovieDetail from "../movieDetail/MovieDetail";


const SearchingResult = (movie:any, search:string) => {

   const [newMovie, setnewMovie] = useState([]);
   const [isShowDetail, setShowDetail] = useState(false);
   const [imdbID, setImdbID] = useState();
   const [lastPage, setLastPage] = useState(true);
   const [currentPage, setCurrentPage] = useState(2);
   const [loadingNew, setLoadingNew] = useState(true)

   async function searchRequest( search:string, currentPage:number) {
      const URL = `https://omdbapi.com/?s=${search}&apikey=3140da31&page=${currentPage}`;
      const res = await fetch(`${URL}`);
      const data = await res.json();
      
      if (data.Search)
         return setnewMovie(data.Search)
      else setLastPage(false)
      setTimeout(() => {
         setLoadingNew(true)
      }, 400);
   }


   function ShowDetail(imdbID:any){
      setShowDetail(true);
      setImdbID(imdbID)
   }

   function nextPage (){
      setCurrentPage(currentPage + 1)
      searchRequest(movie.search, currentPage);
      setTimeout(() => {
            setLoadingNew(false)
      }, 400);
   }

  return (
    <div className='search-result'>
        <div className="container">
           <div className="search-result-content">
              <h3 className='search-result-title'>Searching results...</h3>

              <ul className="search-result-list">
                 {loadingNew ?
               movie?.movie?.map((item: IMovieResult) => (

                  <li className="search-result-list-item item" key={item.imdbID} onClick={() => ShowDetail(item.imdbID)}>
                     <div className="search-result-list-item-thumbnail">
                        <img src={(item.Poster !== "N/A") ? item.Poster : "/image/no_image.jpg"} alt="poster" />
                     </div>
                     <div className="search-result-list-item-info">
                        <h3>{item.Title}</h3>
                        <p>Year: {item.Year}</p>
                     </div>
                     </li>
               ))
               :
                 newMovie.map((item: IMovieResult) => (

                    <li className="search-result-list-item item" key={item.imdbID} onClick={() => ShowDetail(item.imdbID)}>
                       <div className="search-result-list-item-thumbnail">
                          <img src={(item.Poster !== "N/A") ? item.Poster : "/image/no_image.jpg"} alt="poster" />
                       </div>
                       <div className="search-result-list-item-info">
                          <h3>{item.Title}</h3>
                          <p>Year: {item.Year}</p>
                       </div>
                    </li>
                 ))

                 }
                 
               </ul>
                  
              {lastPage ?
                 <div><button className="btn-next-page" onClick={()=> nextPage()}>NEXT</button></div>
                 : <div><button className="btn-last-page">No more movies found</button></div>
              }
               
              {isShowDetail ? 
              <div className="movie-detail-active">
                 <div onClick={() => setShowDetail(false)}>
                    <i className="fa-solid fa-xmark fa-2xl" ></i>
                 </div>
                 <MovieDetail movie={imdbID} />
                 </div> 
                 : 
                 null}
            </div>
        </div>
    </div>
  )
}

export default SearchingResult
