import './Icon.css';
import Mountain from '../assets/mountain_icon.png';
import Globe from '../assets/globe_icon.png';
import Carabiner from '../assets/carabiner_icon.png';
  

const Icon = ({ marginTop = '100px'}) => {
  return (

    <div className="icon-container" style={{ marginTop }}>
      <div className='mountain'>
      <img src = {Mountain}/>
      <h3>Free Climbing Lessons</h3>
      </div>

      <div className='carabiner'>
      <img src = {Carabiner}/>
      <h3>Gear Renting</h3>
      </div>

      <div className='globe'>
      <img src = {Globe}/>
      <h3>Meeting New People</h3>
      </div>
      
    
    </div>
  );
};

export default Icon;