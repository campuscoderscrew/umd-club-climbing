import './Icon.css';
import Mountain from '../assets/mountain_icon.svg';
import Globe from '../assets/globe_icon.svg';
import Carabiner from '../assets/carabiner_icon.svg';
import Ellipse from '../assets/ellipse.svg';

const Icon = ({ marginTop = '100px' }) => {
  return (
    <div className="icon-container" style={{ marginTop }}>
      <div className='mountain'>
        <div className="icon-with-ellipse">
          <img src={Ellipse} alt="Ellipse background" />
          <img src={Mountain} alt="Mountain icon" />
        </div>
        <h3>Free Climbing Lessons</h3>
      </div>

      <div className='carabiner'>
        <div className="icon-with-ellipse">
          <img src={Ellipse} alt="Ellipse background" />
          <img src={Carabiner} alt="Carabiner icon" />
        </div>
        <h3>Gear Renting</h3>
      </div>

      <div className='globe'>
        <div className="icon-with-ellipse">
          <img src={Ellipse} alt="Ellipse background" />
          <img src={Globe} alt="Globe icon" />
        </div>
        <h3>Meeting New People</h3>
      </div>
    </div>
  );
};

export default Icon;