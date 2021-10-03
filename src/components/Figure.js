import videoimg1 from '../Assets/Youtube Vid 1.png';
import videoimg2 from '../Assets/Youtube Vid 2.png';
import '../styles/figure.scss';

function Figure() {
  const arr = [videoimg2, videoimg2, videoimg2];

  return (
    <section className="figure" id="process">
      <div className="wrapper">
        <div className="main-video">
          <h2>Live Video</h2>
          <img src={videoimg1} alt="main video img" />
        </div>
        <div className="more-video">
          <h2>More Workouts</h2>
          <ul className="video-imgs">
            {
              arr.map(item => <li><img src={item} alt="additional video imgs"></img></li>)
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Figure;