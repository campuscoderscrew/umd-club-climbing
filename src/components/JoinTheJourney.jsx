import './JoinTheJourney.css'
import { motion, useAnimation } from 'framer-motion';
import whitehold1 from '../assets/white_hold_1.png'
import whitehold2 from '../assets/white_hold_2.png'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'



function JoinTheJourney() {
  const handleClick = (socialMedia) => {
    if(socialMedia=="i"){
       window.open('https://www.instagram.com/umdclubclimbing/?hl=en', '_blank');
    } 
    if(socialMedia=="t"){
       window.open('https://linkedin.com', '_blank');
    }
    if(socialMedia=="m"){
       window.open('https://www.facebook.com/umdclubclimbing/', '_blank');
    }
    if(socialMedia=="j"){
       window.open('https://groups.google.com/u/2/g/umd-club-climbing', '_blank');
    }
    
    // implementation details
  };


  return (
    <div className="join-container"> {/* This is the relative container */}
     <motion.img
        className="hold1"
        src={whitehold1}
        alt="Hold 1"
     initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      />
      
      <div className="words">
        <button className="button" onClick={() => handleClick("j")}>
        Join Us
      </button>

      <motion.div 
      className="jtj"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      > Join the Journey</motion.div> 

      <motion.div 
      className="description"
       initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.4 }} 
      > Connect on GroupMe for live updates and campus events, sign up on IMLeagues, and sign the wall waiver
      </motion.div>
       <div className="logos">
         <motion.img className="logo1" src={icon1} onClick={() => handleClick("i")}  
         initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease:"easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}/>
        <motion.img className="logo2" src={icon2} onClick={() => handleClick("t")}  
         initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}/>
         <motion.img className="logo3" src={icon3} onClick={() => handleClick("m")}  
         initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}/>
      </div> 
      </div>
         <motion.img
        className="hold2"
        src={whitehold2}
        alt="Hold 2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      />
      

    </div>
  );
}

export default JoinTheJourney;
