import clientImg from '../Assets/Place Holder 6.png';
import otherClientImg from '../Assets/Place Holder 7.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../styles/client.scss';

function Client() {
  const arr = [
    {
      image: otherClientImg,
      name: 'Client Name',
      info: 'text '.repeat(70),
    },
    {
      image: otherClientImg,
      name: 'Gichul',
      info: 'gichul '.repeat(70),
    },
    {
      image: otherClientImg,
      name: 'Coco',
      info: 'coco '.repeat(70),
    }
  ];
  const [current, setCurrent] = useState(0);
  const length = arr.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const previSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <section className="client">
      <div className="story">
        <div className="wrapper">
          <h2>Client Success Story</h2>
          <div className="container">
            <div className="text-container">
              {
                arr.map((item, index) => {
                  return (
                    <div key={index}>
                      {index === current && (
                        <>
                          <h3>{item.name}</h3>
                          <h4>Program | Weight Lost</h4>
                          <p>{item.info}</p>
                          <button>Book Consultation</button>
                        </>
                      )}
                    </div>
                  )
                })
              }
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
            <FontAwesomeIcon icon={faChevronLeft} className="left-arrow" onClick={previSlide} />
            {
              arr.map((item, index) => {
                return (
                  <div key={index}>
                    {index === current && (
                      <img src={item.image} alt="other clients profile imgs" />
                    )}
                  </div>
                )
              })
            }
            <FontAwesomeIcon icon={faChevronRight} className="right-arrow" onClick={nextSlide} />
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