import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homepage from './pages/home/Homepage';
import './App.css';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import NodeFound from './pages/NodeFound';
import Layout from './pages/layout/Layout';
import Contact from './pages/contact/Contact';
import Person from './pages/person/Person';
// import { useDispatch, Selector } from '@reduxjs/toolkit';
// import { AppDispatch } from './store/store';




function App() {



  return (
    <div className="App">

        <Routes>
        
        <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="contact" element={<Contact />} />
            <Route path="person" element={<Person />} />
            <Route path="*" element={<NodeFound />} />

        </Route>

        </Routes>
    </div>
  );
}

export default App;
