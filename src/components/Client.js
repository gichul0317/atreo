import clientImg from '../Assets/Place Holder 6.png';
import otherClientImg from '../Assets/Place Holder 7.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/client.scss';

function Client() {
  const arr = [otherClientImg, otherClientImg, otherClientImg];

  return (
    <section className="client">
      <div className="story">
        <div className="wrapper">
          <h2>Client Success Story</h2>
          <div className="container">
            <div className="text-container">
              <h3>Client Name</h3>
              <h4>Program | Weight Lost</h4>
              <p>{'text '.repeat(70)}</p>
              <button>Book consultation</button>
            </div>
            <div className="img-container">
              <img src={clientImg} alt="client profile img" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="wrapper">
          <ul>
            <FontAwesomeIcon icon={faChevronLeft} className="left-arrow" />
            {
              arr.map(item => {
                return (
                  <li>
                    <img src={item} alt="other clients profile imgs" />
                  </li>
                )
              })
            }
            <FontAwesomeIcon icon={faChevronRight} className="right-arrow" />
          </ul>
        </div>
      </div>

      <div className="contacts">
        <div className="wrapper">
          <ul>
            <ul className="nav-container">
              <li>
                <a href="#about" rel="noreferrer">
                  About
                </a>
              </li>
              <li>
                <a href="#process" rel="noreferrer">
                  Process
                </a>
              </li>
              <li>
                <a href="#shop" rel="noreferrer">
                  Shop
                </a>
              </li>
            </ul>

            <ul className="sns-container">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Client;