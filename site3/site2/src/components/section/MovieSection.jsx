function MovieSection(props) {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner container">
        <div className="move__text">
          <h3>영화 추천</h3>
          <p>영화 영화 영화 영화 영화 추천</p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="movie__item">
          <div>
            <img src="./assets/images/movie/Rectangle 757.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/movie/Rectangle 757.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/movie/Rectangle 757.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/movie/Rectangle 757.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default MovieSection;
