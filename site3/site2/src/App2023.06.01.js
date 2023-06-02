import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Main from './components/layout/Main.jsx';

import SliderSection from './components/section/SliderSection.jsx';
import IntorSection from './components/section/IntorSection.jsx';
import MemberSection from './components/section/MemberSection.jsx';
import PortSection from './components/section/PortSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';

function App() {
  return (
    <>
      <Header attr={'header__wrap cafe5 bg-blue'} />
      <Main>
        <SliderSection attr={'slider__wrap cafe5 section'} />
        <IntorSection attr={'intro__wrap cafe5 section bg-blue'} />
        <MemberSection attr={'members__wrap cafe5 section center'} />
        <PortSection attr={'port__wrap cafe5 section center bg-blue'} />
        <YoutubeSection attr={'youtube__wrap cafe5 section'} />
        <UnsplashSection attr={'unsplash__wrap cafe5 section bg-blue'} />
        <MovieSection attr={'movie__wrap cafe5 section'} />
      </Main>
      <Footer attr={'footer__wrap cafe5 section bg-blue'} />
    </>
  );
}

export default App;
