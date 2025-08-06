import logo from './logo.svg';
import Slider from "./Slider.js"
import './App.css';


function App() {
 const sliders = [
   {
     id: "slider1",
     images: [
       "images/rock1.jpg",
       "images/rock2.jpg",
       "images/rock3.jpg",
       "images/rock4.jpg",
       "images/rock5.jpg",
       "images/rock6.jpg",
       "images/rock7.jpg",
     ],
     direction: "left"
   },


 ];




 return (
 <section className="sliders-container">
 {sliders.map((slider) => (
 <Slider
 key = {slider.id}
 id={slider.id}
 images={slider.images}
 direction={slider.direction}
 />
 ))}
 </section>
 );
}


export default App;

