import React from 'react';
import { Route, Routes} from "react-router-dom";
import Homepage from './pages/home/Homepage';
import './App.css';
import Search from './pages/search/Search';
import NodeFound from './pages/NodeFound';
import Layout from './pages/layout/Layout';
import Person from './pages/person/Person';
import MyFavorite from './pages/myFavorite/MyFavorite';
// import { useDispatch, Selector } from '@reduxjs/toolkit';
// import { AppDispatch } from './store/store';




function App() {



  return (
    <div className="App">

        <Routes>
        
        <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="search" element={<Search />} />
            <Route path="favourite" element={<MyFavorite />} />
            <Route path="person" element={<Person />} />
            <Route path="*" element={<NodeFound />} />

        </Route>

        </Routes>
    </div>
  );
}

export default App;
