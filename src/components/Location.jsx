import React from "react";
import { GoogleMap, LoadScript} from "@react-google-maps/api";
import iphoneFrame from "../assets/iphone15.png";
import "./Location.css";

const apiKey = import.meta.env.VITE_KEY; {/*.env file must be in root directory for api key import to work*/}
const center = { lat: 38.9936, lng: -76.9452 };

export default function Location() {
  return (
      <div className="location-container">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="Location">
          <div className="text">
            <br />
            <h2>Location/Times</h2>
            <h1>Climbing Sessions</h1>
            We offer both indoor climbing at Eppley Recreational Center and outdoor mountain adventures.
            Our club meets every Thursday and Sunday to connect and climb.<br></br>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Geary+F.+Eppley+Recreation+Center,+4128+Valley+Dr,+College+Park,+MD+20742/@38.9935511,-76.9496274,16.31z"
            >
            <button type="button">Open Map</button>
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
                  <gmp-advanced-marker position={center} ></gmp-advanced-marker> 
                  
                  {/*changed to a non depracted element*/}
                </GoogleMap>
              </LoadScript>
            </div>

            <img className="phone-frame" src={iphoneFrame} alt="iPhone 15 frame" />
          </div>
        </div>
      </div>
  );
}