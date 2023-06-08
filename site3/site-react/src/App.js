import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './components/pages/Home.jsx';
import Member from './components/pages/Member.jsx';
import Port from './components/pages/Port.jsx';
import Youtube from './components/pages/Youtube.jsx';
import Movie from './components/pages/Movie.jsx';
import Unsplash from './components/pages/Unsplash.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header attr={'header__wrap cafe5 bg-blue'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/port" element={<Port />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/unsplash" element={<Unsplash />} />
      </Routes>
      <Footer attr={'footer__wrap cafe5 section bg-blue'} />
    </BrowserRouter>
  );
}

export default App;
