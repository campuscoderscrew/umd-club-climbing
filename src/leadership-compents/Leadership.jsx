import './box.css'
import './heading.css'
import './imgs.css'
import climbingbigHold from './assets/big_hold.png'; 
import climbingsmallHold from './assets/small_hold.png'; 
import React from "react";

export const leadershipheading = ({ src, title }) => {
 return (
     <div>
     <div className="board">
      <h1>Our Board Members</h1>
    </div>
    <div className="pres">
      <h1>President</h1>
    </div>
    <div className="box">
      <div style={boxStyle}></div>
     </div>
     <div className="firstname">
      <h1>SKYLAR</h1>
     </div>
     <div className="lastname">
      <h1>STRICKLER</h1>
      </div>
      <div className="hobbies">
      <h1>Favorite climb: Ones with rocks</h1>
      </div>
      <img src={climbingbigHold} alt="Climbing Hold" className={big} />
      <img src={climbingsmallHold} alt="Climbing Hold" className={small} />
  </div>
 );
};
export default leadershipheading;