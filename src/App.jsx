import './App.css';
import LandingPage from './components/LandingPage';
import Text from './components/Text';
import Location from './components/Location';
import JoinTheJourney from './components/JoinTheJourney';
import LeadershipHeading from './leadership-compents/Leadership';

function App() {
  return (
    <>
      <LandingPage />
      <Text
        highlight="Our Mission"
        title="Climbing for all, Built with Purpose"
        description="We aim to grow the climbing community by offering fun experiences where members can stay active, connect with others, and build their skills."
         marginTop="300px"
      />
       <div class="center-box"></div>
       <Text
        highlight="Services"
        title="Your Climbing Experience"
        description="Open to everyone of varying skill level"
         marginTop="100px"
      />
      <LeadershipHeading />
      <Location></Location>
      <JoinTheJourney></JoinTheJourney>
    </>
  );
}

export default App;
