import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Data from "./Data";
import Map from "./Map";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer } from "react-leaflet";

const Home = () => {
  const { locationData } = useSelector((state) => state.location);
  const [pos, setPos] = useState([51.505, -0.09]);
  useEffect(() => {
    if (locationData !== null) {
      setPos([locationData?.location.lat, locationData?.location.lng]);
    }
  }, [locationData]);
  return (
    <>
      <main className="home">
        <Header />
        <Data />
        <MapContainer
          center={pos}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map pos={pos} />
        </MapContainer>
      </main>
    </>
  );
};

export default Home;
