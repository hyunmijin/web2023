import React from 'react';

import { Link } from 'react-router-dom';

const unsplashTitle = {
  title: '이미지 추천',
  desc: '다나카 카츠야 서울 전시 작품',
  link: '자세히 보기',
};

const unsplashitem = [
  {
    img: 'https://tokyomina.com/wp-content/uploads/2018/12/ta7.jpg',
  },
  {
    img: 'https://tokyomina.com/wp-content/uploads/2018/12/ta11.jpg',
  },
  {
    img: 'https://tokyomina.com/wp-content/uploads/2018/12/ta2.jpg',
  },
  {
    img: 'https://tokyomina.com/wp-content/uploads/2018/12/ta10.jpg',
  },
];

function unsplashDesc({ img, title }) {
  return (
    <div>
      <img src={img} alt={title} />
    </div>
  );
}

function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>{unsplashTitle.title}</h3>
          <p>{unsplashTitle.desc}</p>
          <Link to="/" class="button-blue">
            {unsplashTitle.link}
          </Link>
        </div>
        <div class="unsplash__item">
          {unsplashitem.map((text, index) => (
            <unsplashDesc key={index} img={text.img} />
          ))}
          ;
          <div>
            <img
              src="https://tokyomina.com/wp-content/uploads/2018/12/ta11.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tokyomina.com/wp-content/uploads/2018/12/ta2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tokyomina.com/wp-content/uploads/2018/12/ta10.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;
