import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Text from "./components/Text";
import Location from "./components/Location";
import WallWaiver from "./components/WallWaiver";
import NavBar from "./components/NavBar";
import Icon from "./components/Icon";
import VideoSection from "./components/VideoSection";
import Join from "./components/Join";
import SliderApp from "./gallery-components/SliderApp";
import SlideAppV1 from "./components/SliderAppv1";
import LeadershipHeading from "./components/Leadership";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // If everything is already loaded (like on fast refresh)
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Wait until the full window (images, videos, etc.) is loaded
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <NavBar />
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
          marginTop="5vh"
        />
      </section>
      <Icon />
      <div style={{ 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  gap: "2rem" 
}}>
  <Text highlight="Board" title="Our Board Members" marginTop="0px" />
  <LeadershipHeading />
</div>
      <section id="location">
        <Location />
      </section>

      <section id="gallery">
        <Text
          highlight="Gallery"
          title="Our Outdoor Adventures"
          description="Where our club has climbed, explored, and enjoyed the great outdoors."
          marginTop="20vh"
          titleColor="#FFFFFF"
          descColor="#A5ABB6"
        />
        <SliderApp />
      </section>

      <section id="join">
        <Join />
      </section>

      <WallWaiver />
    </>
  );
}

export default App;
