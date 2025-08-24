import Slider from "./Slider.jsx"
import './SliderApp.css';

import rock1 from "/umdclub_1.jpg";
import rock2 from "/umdclub_2.jpg";
import rock3 from "/umdclub_3.jpg";
import rock4 from "/umdclub_4.jpg";
import rock5 from "/umdclub_5.jpg";
import rock6 from "/umdclub_6.jpg";
import rock7 from "/umdclub_7.jpg";

function SliderApp() {
 const sliders = [
   {
     id: "slider1",
     images: [rock1, rock2, rock3, rock4, rock5, rock6, rock7],
     direction: "right"
   }
 ];
return (
  <section className="slider-app">
    <div className="sliders-container">
      {sliders.map((slider) => (
        <Slider
          key={slider.id}
          id={slider.id}
          images={slider.images}
          direction={slider.direction}
        />
      ))}
    </div>
  </section>
);

}

export default SliderApp;
