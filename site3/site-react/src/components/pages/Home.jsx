import React from 'react';
import Main from '../layout/Main.jsx';
import SliderSection from '../section/SliderSection.jsx';
import IntorSection from '../section/IntorSection.jsx';
import MemberSection from '../section/MemberSection.jsx';
import PortSection from '../section/PortSection.jsx';
import YoutubeSection from '../section/YoutubeSection.jsx';
import UnsplashSection from '../section/UnsplashSection.jsx';
import MovieSection from '../section/MovieSection.jsx';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap cafe5 section'} />
        <IntorSection attr={'intro__wrap cafe5 section bg-blue'} />
        <MemberSection attr={'members__wrap cafe5 section center'} />
        <PortSection attr={'port__wrap cafe5 section center bg-blue'} />
        <YoutubeSection attr={'youtube__wrap cafe5 section'} />
        <UnsplashSection attr={'unsplash__wrap cafe5 section bg-blue'} />
        <MovieSection attr={'movie__wrap cafe5 section'} />
      </Main>
    </>
  );
}

export default Home;
