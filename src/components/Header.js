import headerimg from '../Assets/Place Holder 1.png';
import asideimg from '../Assets/Place Holder 2.png';
import '../styles/header.scss';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="header-img-container">
          <img src={headerimg} alt="placeholder img for header section" />
        </div>
        <div className="intro" id="about">
          <div className="text-container">
            <h1>Meet Gagan</h1>
            <p>
              {
                'text '.repeat(100)
              }
            </p>
            <button>Learn more</button>
          </div>
          <div className="img-container">
            <img src={asideimg} alt="aside profile img section for trainer/owner" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;