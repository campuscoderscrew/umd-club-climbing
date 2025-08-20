import Slider from "./Slider.jsx"
import './SliderApp.css';

import rock1 from "../images/rock1.jpg";
import rock2 from "../images/rock2.jpg";
import rock3 from "../images/rock3.jpg";
import rock4 from "../images/rock4.jpg";
import rock5 from "../images/rock5.jpg";
import rock6 from "../images/rock6.jpg";
import rock7 from "../images/rock7.jpg";

function SliderApp() {
 const sliders = [
   {
     id: "slider1",
     images: [rock1, rock2, rock3, rock4, rock5, rock6, rock7],
     direction: "right"
   }
 ];

 return (
   <section className="sliders-container">
     {sliders.map((slider) => (
       <Slider
         key={slider.id}
         id={slider.id}
         images={slider.images}
         direction={slider.direction}
       />
     ))}
   </section>
 );
}

export default SliderApp;
