import './App.css';
import LandingPage from './components/LandingPage';
import Text from './components/Text';


function App() {
  return (
    <>
      <LandingPage />
      <Text
        highlight="Our Mission"
        title="Climbing for all, Built with Purpose"
        description="We aim to grow the climbing community by offering fun experiences where members can stay active, connect with others, and build their skills."
      />
    </>
  );
}

export default App;
