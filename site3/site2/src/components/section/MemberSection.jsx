function MemberSection(props) {
  return (
    <section id="memberSection" className={props.attr}>
      <h3>Tatsuya Tanaka</h3>
      <p>다나카 타츠야</p>
      <div className="member__inner container">
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/about01.jpg" alt="커피의 안좋은점" />
          </figure>
          <div className="member__body">
            <h4 className="title">"</h4>
            <p className="desc">
              미니어처 사진가·평가 작가. 1981년 구마모토 출생. 미니어처의 시점에서 일상에 있는 물건을 다른 물건에
              돋보이게 한 아트 「MINIATURE CALENDAR」를 개시
            </p>
            <a href="/" className="btn"></a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/about02.jpg" alt="커피의 안좋은점" />
          </figure>
          <div className="member__body">
            <h4 className="title">"</h4>
            <p className="desc">
              소품들을 사용해 마치 동화와 같은 구성과 연출로 독특한 매력을 보여주고 있는 사진들을 업로드 하고, 이후 매일
              작품을 인터넷상에서 계속 발표하고 있다.
            </p>
            <a href="/" className="btn"></a>
          </div>
        </div>
        <div className="member">
          <figure className="member__header">
            <img src="./assets/images/member/about03.jpg" alt="커피의 안좋은점" />
          </figure>
          <div className="member__body">
            <h4 className="title">"</h4>
            <p className="desc">
              사람들에게 매일매일 조금의 재미를 느끼게 해주고 싶다. 기발하고 앙증맞은 그의 작품은 반복되는 일상에
              지쳐있는 많은 사람들에게 소소한 즐거움을 전하고 있다.
            </p>
            <a href="/" className="btn"></a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MemberSection;
