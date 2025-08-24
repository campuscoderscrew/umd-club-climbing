import './App.css';
import LandingPage from './components/LandingPage';
import Text from './components/Text';
import Location from './components/Location';
import WallWaiver from './components/WallWaiver';
import NavBar from './components/NavBar';
import Icon from './components/Icon';
import VideoSection from './components/VideoSection';
import Join from './components/Join';
import SliderApper from './components/SliderApper';
import Accordion from './components/Accordion';


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
          marginTop="25%"
        />
      </section>
      
      <VideoSection />

       <section id="services">
        <Text
          highlight="Services"
          title="Your Climbing Experience"
          description="Open to everyone of varying skill level"
          marginTop="10%"
        />
      </section>
      <Icon></Icon>
      <div style={{ height: "800px", width: "100%",marginTop:"5%", display: "flex",justifyContent: "center" }}>
  <Text
    highlight="Board"
    title="Our Board Members"
    marginTop="0px"
  />
</div>

        <Location />
  

  <Text
          highlight="Gallery"
          title="Our Outdoor Adventures"
          description="Where our club has climbed, explored, and enjoyed the great outdoors."
          marginTop="0px"
          titleColor="#FFFFFF"
          descColor="#A5ABB6"
        />
        <SliderApper />

     
        <Join></Join>
      

      <WallWaiver></WallWaiver>
    </>
  );
}

export default App;
