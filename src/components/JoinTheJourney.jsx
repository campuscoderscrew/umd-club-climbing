import './JoinTheJourney.css'
import ellipse from './assets/ellipse.svg'
import icon2 from './assets/icon1.svg'
import icon1 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import whitehold1 from './assets/white_hold_1.png'
import whitehold2 from './assets/white_hold_2.png'



function JoinTheJourney() {
const handleClick = () => {
    // implementation details
  };
  return (
    <>
    <div className='App'>
      <img className="hold1" src={whitehold1}></img>
      <img className="hold2" src={whitehold2}></img>
        <button className="button" onClick={handleClick}>
      Join Us
      </button>
    <p className="jtj">Join the Journey</p>
    <p className="description">Connect on GroupMe for live updates and campus events, sign up on IMLeagues, and sign the wall waiver </p>
    <div className="logos">
      <img className="logo1" src={icon1}></img>
      <img className="logo2" src={icon2}></img>
      <img className="logo3" src={icon3}></img>
      <img className="ellipse1" src={ellipse}></img>
      <img className="ellipse2" src={ellipse}></img>
      <img className="ellipse3" src={ellipse}></img>
    </div> 
    </div>
    </>
  )
}

export default JoinTheJourney