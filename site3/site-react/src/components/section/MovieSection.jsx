import React from 'react';

import { Link } from 'react-router-dom';

const movieTitle = {
  title: '영화 추천',
  desc: '러빙 빈센트, 호크니, 뱅크시, 진주 귀걸이를 한 소녀',
  link: '자세히 보기',
};

const movieitem = [
  {
    img: 'https://img.movist.com/?img=/x00/04/97/02_p1.jpg',
    title: '러빙빈센트',
  },
  {
    img: 'https://img.movist.com/?img=/x00/05/18/36_p1.jpg',
    title: '데이비드호크니',
  },
  {
    img: 'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_poster_images/movie_108754_1657681391.jpg',
    title: '데이비드호크니',
  },
  {
    img: 'https://img.movist.com/?img=/x00/00/85/76_p1.jpg',
    title: '진주귀걸이를 한소녀',
  },
];

function MovieDesc({ img, title }) {
  return (
    <div>
      <img
        src={img}
        alt={title}
      />
    </div>
  );
}
function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner container">
        <div className="move__text">
          <h3>{movieTitle.title}</h3>
          <p>{movieTitle.desc}</p>
          <Link to="/" class="button-red">
            {movieTitle.link}
          </Link>
        </div>
        <div class="movie__item">
        {movieitem.map((text, index) => (
            <MovieDesc key={index} img={text.img} />
          ))}
          ;
          {/* <div>
            <img
              src="https://img.movist.com/?img=/x00/04/97/02_p1.jpg"
              alt="러빙빈센트"
            />
          </div> */}
          {/* <div>
            <img
              src="https://img.movist.com/?img=/x00/05/18/36_p1.jpg"
              alt=""
            />
          </div> */}
          {/* <div>
            <img
              src="https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/movie_poster_images/movie_108754_1657681391.jpg"
              alt="뱅크시"
            />
          </div> */}
          {/* <div>
            <img
              src="https://img.movist.com/?img=/x00/00/85/76_p1.jpg"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default MovieSection;
