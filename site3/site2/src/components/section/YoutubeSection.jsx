function YoutubeSection(props) {
  return (
    <section id="youtubeSection" className={props.attr}>
      <div className="youtube__inner container">
        <div className="youtube__text">
          <h3>유투버 추천</h3>
          <p>
            유투버 추천유투버 추천유투버 <br />
            추천유투버 추천유투버 추천
          </p>
          <a href="/" className="button-red">
            자세히 보기
          </a>
        </div>
        <div className="youtube__item">
          <div>
            <img src="./assets/images/youtube/Rectangle 745.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/youtube/Rectangle 746.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/youtube/Rectangle 747.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/youtube/Rectangle 748.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default YoutubeSection;
