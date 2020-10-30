import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import MapCard from "./../../img/home.svg";
import Spinner from "./Spinner";
import MapStyles from "./MapStyles";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: -1.292066,
  lng: 36.821945,
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
};
const markers = [
  {
    lat: -1.292066,
    lng: 36.821945,
  },
];
function SearchMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  if (loadError) return "Error Loading map";
  if (!isLoaded) return <Spinner />;
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
      >
        {markers.map((marker, i) => (
          <Marker
            key={i}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: MapCard,
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 20),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default SearchMap;
