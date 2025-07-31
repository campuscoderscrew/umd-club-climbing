import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import iphoneFrame from "../assets/iphone15.png";
import button from "../assets/Link.png";
import "./Location.css";

const apiKey = import.meta.env.VITE_KEY;
const center = { lat: 38.9936, lng: -76.9452 };

export default function Location() {
  return (
    <div className="location-container"> {/* RELATIVE CONTAINER */}
      <div className="Location">
        <div className="text">
          <br />
          <h2>Location/Times</h2>
          <h1>Climbing Sessions</h1>
          We offer both indoor climbing at Eppley Recreational Center and outdoor mountain adventures.
          Our club meets every Thursday and Sunday to connect and climb.
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Geary+F.+Eppley+Recreation+Center,+4128+Valley+Dr,+College+Park,+MD+20742/@38.9935511,-76.9496274,16.31z"
          >
            <img src={button} alt="Google Maps Link" />
          </a>
        </div>

        <div className="phone-wrapper">
          <div className="map-mask">
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "98%" }}
                center={center}
                zoom={16}
                options={{ disableDefaultUI: true }}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>

          <img className="phone-frame" src={iphoneFrame} alt="iPhone 15 frame" />
        </div>
      </div>
    </div>
  );
}
