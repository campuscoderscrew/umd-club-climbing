import './JoinTheJourney.css'
import whitehold1 from '../assets/white_hold_1.png'
import whitehold2 from '../assets/white_hold_2.png'

function JoinTheJourney() {
  const handleClick = () => {
    // implementation details
  };

  return (
    <div className="join-container"> {/* This is the relative container */}
      <img className="hold1" src={whitehold1} alt="Hold 1" />
      <img className="hold2" src={whitehold2} alt="Hold 2" />
      
      <button className="button" onClick={handleClick}>
        Join Us
      </button>

      <p className="jtj">Join the Journey</p>

      <p className="description">
        Connect on GroupMe for live updates and campus events, sign up on IMLeagues, and sign the wall waiver
      </p>

    
    </div>
  );
}

export default JoinTheJourney;
