function IntorSection(props) {
  return (
    <section id="introSection" className={props.attr}>
      <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
      <div className="intro__inner container">
        <div className="intro__title">
          <span>MINIATURE</span>
          <h2>
            10년째 매일매일!
            <br />
            미니어처 사진가
          </h2>
          <p>
            주변에서 흔히 볼 수 있는 오브제를 이용해 <br />
            위트있는 미니어처 세계를 구축합니다.
          </p>
        </div>
        <div className="intro__desc">
          <div className="icon-bg1">
            <h4>아이디어</h4>
            <p>우리가 일상적으로 사용하는 물건들을 가지고 디오라마 스타일의 사진을 한컷 한컷 담아 냅니다.</p>
          </div>
          <div className="icon-bg2">
            <h4>캘린더</h4>
            <p>
              타나카 타츠야는 2011년 4월부터 현재까지 하루도 빠짐없이 'MINIATURE CALENDAR'를 통해 작품을 발표하고 있다.{' '}
            </p>
          </div>
          <div className="icon-bg3">
            <h4>기록</h4>
            <p>그의 작품은 단순히 작고 섬세한 미니어처를 넘어서서 ‘스토리텔링’이 가미된 작품으로 거듭난다.</p>
          </div>
          <div className="icon-bg4">
            <h4>미니어처</h4>
            <p>소유하고 있는 미니어처들이 수없이 많단고 한다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default IntorSection;
