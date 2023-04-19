import { useState, useRef, useEffect } from "react";
// import cn from "classnames";
import debounce from "lodash.debounce";
import { useParams } from 'react-router-dom';
import './SearchingResult.css';
import { IMovieResult } from '../../interfaces/interface';
import { useAppSelector,useAppDispatch } from '../../hooks/redux';
import { fetchMovieById } from '../../redux/actions/actionCreator';


// async function movieDetailResult() {
//    const URL = `https://omdbapi.com/?i=tt10145122&page=1&apikey=3140da31`;
//    const res = await fetch(`${URL}`);
//    const data = await res.json();
//    console.log(data);

//    if (data)
//       return data
//    else console.log('error')
// }

const SearchingResult = (movie:any) => {

      const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
      const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

      const containerRef = useRef<HTMLUListElement>(null);

      const checkForScrollPosition = () => {
         const { current } = containerRef;
         if (current) {
            const { scrollLeft, scrollWidth, clientWidth } = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
         }
      };

      const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

      function scrollContainerBy (distance: number)  {
         return containerRef.current?.scrollBy({ left: distance, behavior: "smooth" })
      };

      useEffect(() => {
         const { current } = containerRef;
         checkForScrollPosition();
         current?.addEventListener("scroll", debounceCheckForScrollPosition);

         return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
         };
      }, []);


  return (
    <div className='search-result'>
        <div className="container">
           <div className="search-result-content">
              <h3 className='search-result-title'>Searching results...</h3>

              <ul className="search-result-list" ref={containerRef}>


                 <div className="scrollableContainer">
                    <ul className="list" >

               {movie?.movie?.map((item: IMovieResult) => (

                     <li className="search-result-list-item item" key={item.imdbID}>
                     <div className="search-result-list-item-thumbnail">
                        <img src={(item.Poster != "N/A") ? item.Poster : "/image/no_image.jpg"} />
                     </div>
                     <div className="search-result-list-item-info">
                        <h3>{item.Title}</h3>
                        <p>Year: {item.Year}</p>
                     </div>
                     </li>
               ))}

                    </ul>
                    {canScrollLeft ? (<button
                       type="button"
                       disabled={!canScrollLeft}
                       onClick={() => scrollContainerBy(-900)}
                       className='button buttonLeft button--hidden'
                    >
                       ←
                    </button>
                    ) : null}
                    {canScrollRight ? (<button
                       type="button"
                       disabled={!canScrollRight}
                       onClick={() => scrollContainerBy(900)}
                       className="button buttonRight button--hidden"
                    >
                       →
                    </button>) : null}
                    {/* {canScrollLeft ? (
                       <div className="shadowWrapper leftShadowWrapper">
                          <div className="shadow leftShadow" />
                       </div>
                    ) : null}
                    {canScrollRight ? (
                       <div className="shadowWrapper rightShadowWrapper">
                          <div className="shadow rightShadow" />
                       </div>
                    ) : null} */}
                 </div>
            
              </ul>
              </div>
        </div>
    </div>
  )
}

export default SearchingResult
