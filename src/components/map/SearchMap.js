import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
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
      ></GoogleMap>
    </div>
  );
}

export default SearchMap;
