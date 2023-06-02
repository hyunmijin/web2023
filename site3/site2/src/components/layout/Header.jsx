function Header(props) {
  return (
    <header id="header" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`} role="heading" aria-level="1">
      <div className="header__inner container">
        <h1 className="header__logo">
          <a href="/">
            web <em>site</em>
          </a>
        </h1>
        <nav className="header__nav" role="navigation">
          <ul>
            <li>
              <a href="#introSection">소개</a>
            </li>
            <li>
              <a href="#memberSection">작가소개</a>
            </li>
            <li>
              <a href="#portSection">포트폴리오</a>
            </li>
            <li>
              <a href="#youtubeSection">유투브</a>
            </li>
            <li>
              <a href="#unsplashSection">이미지</a>
            </li>
            <li>
              <a href="#movieSection">영화</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
