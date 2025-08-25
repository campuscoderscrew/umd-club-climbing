import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iphoneFrame from "../assets/iphone15.png";
import pin from "../assets/Pin.png";
import "./Location.css";

const center = [38.9936, -76.9452]; // Leaflet expects [lat, lng]

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

  // Custom pin icon using your image
  const customIcon = L.icon({
    iconUrl: pin,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

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
            <MapContainer
              center={center}
              zoom={17}
              style={{ width: "100%", height: "98%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={center} icon={customIcon}>
                <Popup>Eppley Recreation Center</Popup>
              </Marker>
            </MapContainer>
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
