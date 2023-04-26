import { useState, useRef, useEffect } from "react";
import debounce from "lodash.debounce";
import './recomendation.css';


// async function movieDetailResult() {
//    const URL = `https://omdbapi.com/?i=tt10145122&page=1&apikey=3140da31`;
//    const res = await fetch(`${URL}`);
//    const data = await res.json();

//    if (data)
//       return data
// }

const Recomendation = (movie: any) => {

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

   function scrollContainerBy(distance: number) {
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
   }, [debounceCheckForScrollPosition]);


   return (
      <div className='recommendation'>
            <div className="recommendation-content">
               <div className="container">
               <h3 className='recommendation-title'>Recommendations...</h3>
               </div>
               <ul className="recommendation-list" >


                  <div className="scrollableContainer">
                     <ul className="list" ref={containerRef}>

                        {/* {movie?.movie?.map((item: IMovieResult) => ( */}

                           <li className="recommendation-list-item item">
                              <div className="recommendation-list-item-thumbnail">
                              <img src='/image/recomm/king.jpg' alt="poster"/>
                              </div>
                              {/* <div className="recommendation-list-item-info">
                                 <h3>Super</h3>
                                 <p>Year: 2023</p>
                              </div> */}
                           </li>

                        <li className="recommendation-list-item item">
                           <div className="recommendation-list-item-thumbnail">
                           <img src='/image/recomm/operation.jpg' alt="poster" />
                           </div>
                           {/* <div className="recommendation-list-item-info">
                              <h3>Super</h3>
                              <p>Year: 2023</p>
                           </div> */}
                        </li>

                        <li className="recommendation-list-item item">
                           <div className="recommendation-list-item-thumbnail">
                           <img src='/image/recomm/actrise.jpg' alt="poster" />
                           </div>
                           {/* <div className="recommendation-list-item-info">
                              <h3>Super</h3>
                              <p>Year: 2023</p>
                           </div> */}
                        </li>

                        <li className="recommendation-list-item item">
                           <div className="recommendation-list-item-thumbnail">
                           <img src='/image/recomm/cold.jpg' alt="poster" />
                           </div>
                           {/* <div className="recommendation-list-item-info">
                              <h3>Super</h3>
                              <p>Year: 2023</p>
                           </div> */}
                        </li>

                        <li className="recommendation-list-item item">
                           <div className="recommendation-list-item-thumbnail">
                              <img src='/image/recomm/spy.jpg' alt="poster" />
                           </div>
                           {/* <div className="recommendation-list-item-info">
                              <h3>Super</h3>
                              <p>Year: 2023</p>
                           </div> */}
                        </li>

                        <li className="recommendation-list-item item">
                           <div className="recommendation-list-item-thumbnail">
                              <img src='/image/recomm/fisher.jpg' alt="poster" />
                           </div>
                           {/* <div className="recommendation-list-item-info">
                              <h3>Super</h3>
                              <p>Year: 2023</p>
                           </div> */}
                        </li>

                     <li className="recommendation-list-item item">
                        <div className="recommendation-list-item-thumbnail">
                           <img src='/image/recomm/mira.jpg' alt="poster" />
                        </div>
                        {/* <div className="recommendation-list-item-info">
                           <h3>Super</h3>
                           <p>Year: 2023</p>
                        </div> */}
                     </li>

                     <li className="recommendation-list-item item">
                        <div className="recommendation-list-item-thumbnail">
                           <img src='/image/recomm/openrelan.jpg' alt="poster" />
                        </div>
                        {/* <div className="recommendation-list-item-info">
                           <h3>Super</h3>
                           <p>Year: 2023</p>
                        </div> */}
                     </li>

                     <li className="recommendation-list-item item">
                        <div className="recommendation-list-item-thumbnail">
                           <img src='/image/recomm/crash.jpg' alt="poster" />
                        </div>
                        {/* <div className="recommendation-list-item-info">
                           <h3>Super</h3>
                           <p>Year: 2023</p>
                        </div> */}
                     </li>
                        {/* ))} */}

                     </ul>
                     {canScrollLeft ? 
                     (<button
                        type="button"
                        disabled={!canScrollLeft}
                        onClick={() => scrollContainerBy(-900)}
                        className='button buttonLeft button--hidden'
                     >
                        ←
                     </button>
                     ) : null}
                     {canScrollRight ? 
                     (<button
                        type="button"
                        disabled={!canScrollRight}
                        onClick={() => scrollContainerBy(900)}
                        className="button buttonRight button--hidden"
                     >
                        →
                     </button>) : null}
                  </div>

               </ul>
            </div>
      </div>
   )
}

export default Recomendation
