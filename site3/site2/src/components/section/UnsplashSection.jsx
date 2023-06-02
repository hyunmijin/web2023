function UnsplashSection(props) {
  return (
    <section id="unsplashSection" className={props.attr}>
      <div className="unsplash__inner container">
        <div className="unsplash__text">
          <h3>이미지 추천</h3>
          <p>이미지 이미지 이미지 이미지 이미지 추천</p>
          <a href="/" className="button-blue">
            자세히 보기
          </a>
        </div>
        <div className="unsplash__item">
          <div>
            <img src="./assets/images/unsplash/Rectangle 745.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/unsplash/Rectangle 746.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/unsplash/Rectangle 747.png" alt="" />
          </div>
          <div>
            <img src="./assets/images/unsplash/Rectangle 748.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default UnsplashSection;
