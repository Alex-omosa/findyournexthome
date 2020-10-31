import React from "react";
import { InfoWindow as GoogleMapInfoWindow } from "@react-google-maps/api";
const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};
function InfoWindow({ CloseWindow, position: { lat, lng } }) {
  return (
    <GoogleMapInfoWindow
      style={divStyle}
      position={{ lat, lng }}
      onCloseClick={CloseWindow}
    >
      <div>
        <h1>InfoWindow</h1>
      </div>
    </GoogleMapInfoWindow>
  );
}

export default InfoWindow;
