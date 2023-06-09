import React from 'react';

import { Link } from 'react-router-dom';

const youtubeTitle = {
  title: '유투버 추천',
  desc: '미니어처 유투버',
  link: '자세히 보기',
};

const youtubeitem = [
  {
    img: 'https://www.youtube.com/embed/Iwq7dL8Pljo',
    num: 'dkelkt442',
    title: '링크',
  },
  {
    img: 'https://www.youtube.com/embed/Iwq7dL8Pljo',
    num: 'dkelkt442',
    title: '링크',
  },
  {
    img: 'https://www.youtube.com/embed/Iwq7dL8Pljo',
    num: 'dkelkt442',
    title: '링크',
  },
  {
    img: 'https://www.youtube.com/embed/Iwq7dL8Pljo',
    num: 'dkelkt442',
    title: '링크',
  },
];

function YoutubeDesc({ img, title }) {
  return (
    <div>
      <iframe src={img} alt={title} allowfullscreen></iframe>
    </div>
  );
}

function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>{youtubeTitle.title}</h3>
          <p>{youtubeTitle.desc}</p>
          <Link to="/" className="button-red">
            {youtubeTitle.link}
          </Link>
        </div>
        <div className="youtube__item">
          {youtubeitem.map((text, index) => (
            <YoutubeDesc key={index} img={text.img} title={text.title} />
          ))}
          ;
          {/* <div>
            <iframe
              src="https://www.youtube.com/embed/Iwq7dL8Pljo"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/Iwq7dL8Pljo"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/Iwq7dL8Pljo"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/Iwq7dL8Pljo"
              allowfullscreen
            ></iframe>
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
