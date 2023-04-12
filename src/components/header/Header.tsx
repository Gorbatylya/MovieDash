import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './header.css';
import useDebounce from '../../hooks/useDebounce';
import { IMovie } from '../../interfaces/interface';


const movieSearchBox = document.getElementById('movie-search-box')

// https://www.omdbapi.com/?s=thor&page=1&apikey=3140da31


async function searchCharacters(search: any) {
      const URL = `https://omdbapi.com/?s=${search}&page=1&apikey=3140da31`;
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data.Search);

      if (data.Search) 
         return data.Search
      else console.log('error')
   }



const Header = () => {

   // для поискового запроса
   const [searchTerm, setSearchTerm] = useState('');
   // для результатов поиска
   const [results, setResults] = useState([]);
   // для статуса поиска (есть ли ожидающий запрос)
   const [isSearching, setIsSearching] = useState(false);

   const [isError, setIsError] = useState(false);

   function movieDetail(value:string){
      console.log(value)
   }




   const debouncedSearchTerm = useDebounce(searchTerm, 500);


   useEffect(
      () => {
         if (debouncedSearchTerm) {
            // изм состояние isSearching
            setIsSearching(true);
            // запрос к АПИ
            searchCharacters(debouncedSearchTerm).then(results => {
               // состояние в false, тк запрос завершен
               setIsSearching(false);
              

               if (results == undefined){
                  console.log('ERROR')
                  setIsError(true)
                  setResults([])
               }
               else {setResults(results)
                     setIsError(false)
                  }
               // console.log (results)
               });

         } else {
            setResults([]);
            setIsError(false)
           
            // console.log('error')
         }
      },
      [debouncedSearchTerm]
   );

   // window.addEventListener('click', (event) => {
   //    if (event.target.className != "form-control") {
   //       searchList.classList.add('hide-search-list');
   //    }
   // });


  return (
    <div>
      
        <header>
           <div className='container'>
              <div className='header-content'>
                 <NavLink to='/' className='logo-wrap'><img src="/image/logo.jpg" alt="logo" className='logo' /></NavLink>
                 <div className='header-menu'>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Home</NavLink>
                    <NavLink to='/movies' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Movies</NavLink>
                    <NavLink to='/series' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Series</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : 'linkPage'}>Contact</NavLink>
                 </div>

                 <div className='header-search-input'>
                    <input className='header-input' placeholder='Film, Series' onChange={e => setSearchTerm(e.target.value)} />
                    {isSearching && <div><i className="fa-regular fa-loader fa-spin"></i></div>}
                    <div className='header-loop-wrap'><a className='fa-solid fa-magnifying-glass fa-lg header-loop'></a></div>

                    
                    <div className="search-list-active" id="search-list" >
                       {isError && <div className='notFound'>More letters</div>}
                       {
                          results.map((item: IMovie) => (
                             <div className="search-list-item" key={item.imdbID} onClick={() => movieDetail(item.imdbID )}>
                        <div className="search-item-thumbnail">
                           <img src={(item.Poster != "N/A") ? item.Poster : "/image/no_image.jpg"} className='img-poster'/>
                        </div>
                        <div className="search-item-info">
                          <h3>{item.Title}</h3>
                           <p>{item.Year}</p>
                       </div>
                      </div>
            
                    
                    ))
                    }
                    </div>

                    {/* <div className="search-list" id="search-list">
                     
                      <div className="search-list-item">
                        <div className="search-item-thumbnail">
                          <img src="/image/medium-cover.jpg" />
                        </div>
                        <div className="search-item-info">
                          <h3>Guardians of the Galaxy Vol. 2</h3>
                          <p>2017</p>
                       </div>
                      </div>
            
                    </div> */}
                 </div>
                 <NavLink to='/person' className={({ isActive }) => isActive ? 'fa-regular fa-circle-user fa-2xl link-person' : 'fa-regular fa-circle-user fa-2xl'}>
                 </NavLink>
              </div>
           </div>
        </header>

    </div>
  )
}

export default Header
