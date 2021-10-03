import asideimg from '../Assets/Place Holder 3.png';
import '../styles/aside.scss';

function Aside() {
  const arr = [asideimg, asideimg, asideimg, asideimg];

  return (
    <aside>
      <div className="wrapper">
        <div className="container">
          <h2>Why Personal Training?</h2>
          <ul>
            {
              arr.map(item =>
                <li>
                  <img src={item} alt="benefit description imgs"></img>
                  Benefit Description
                </li>)
            }
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Aside;