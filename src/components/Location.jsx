import React, { useRef, useEffect, useState } from "react";
import iphoneFrame from "../assets/iphone15.png";
import pin from "../assets/Pin.png";
import "./Location.css";

export default function Location() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="location-container" ref={containerRef}>
      <div className={`Location ${visible ? "in-view" : ""}`}>
        <div className="text">
          <h2>Location/Times</h2>
          <h1>Climbing Sessions</h1>
          <span className="info">
            We offer both indoor climbing at Eppley Recreational Center and
            outdoor mountain adventures. Our club meets every Thursday and
            Sunday to connect and climb.
          </span>
          <br />
          <a
            href="https://www.google.com/maps/place/Geary+F.+Eppley+Recreation+Center,+4128+Valley+Dr,+College+Park,+MD+20742/"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            <img src={pin} alt="Map Pin" />
            <span>Open Map</span>
          </a>
        </div>

        <div className="phone-wrapper">
          <div className="map-mask">
            <iframe
              title="Eppley Recreation Center Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.502141337264!2d-76.9452!3d38.9936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c69fdb72f229%3A0x1c50f4db7a7f6f0!2sGeary%20F.%20Eppley%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1693135112345!5m2!1sen!2sus"
              width="100%"
              height="98%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <img
            className="phone-frame"
            src={iphoneFrame}
            alt="iPhone 15 frame"
          />
        </div>
      </div>
    </div>
  );
}
