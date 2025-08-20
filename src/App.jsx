import './App.css';
import LandingPage from './components/LandingPage';
import Text from './components/Text';
import Location from './components/Location';
import JoinTheJourney from './components/JoinTheJourney';
import WallWaiver from './components/WallWaiver';
import NavBar from './components/NavBar';
import Icon from './components/Icon';
import VideoSection from './components/VideoSection';



function App() {
  return (
    <>
      <NavBar></NavBar>
      <section id="home">
        <LandingPage />
      </section>

      <section id="about">
        <Text
          highlight="Our Mission"
          title="Climbing for all, Built with Purpose"
          description="We aim to grow the climbing community by offering fun experiences where members can stay active, connect with others, and build their skills."
          marginTop="0px"
        />
      </section>
      
      <VideoSection />

       <section id="services">
        <Text
          highlight="Services"
          title="Your Climbing Experience"
          description="Open to everyone of varying skill level"
          marginTop="100px"
        />
      </section>
      <Icon/>

      <section id="location">
      <Location />
      </section>

      <section id="join">
        <JoinTheJourney />
      </section>

      <WallWaiver></WallWaiver>
    </>
  );
}

export default App;
