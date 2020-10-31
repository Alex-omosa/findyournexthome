import React from "react";
import { Marker } from "@react-google-maps/api";
import InfoWindow from "../InfoWindow/InfoWindow";
import MapCard from "./../../../img/home.svg";
import House2 from "./../../../img/house2.svg";

function MapMarker({ position, defaultOpenInfoWindow, setIsOpenByDefault }) {
  const [isOpenInfoWindow, setIsOpenInfoWindow] = React.useState(null);

  const CloseWindow = () => {
    setIsOpenByDefault(false);
    setIsOpenInfoWindow(false);
  };

  const showInfoWindow = (position) => (
    <InfoWindow CloseWindow={CloseWindow} position={position} />
  );
  return (
    <div>
      <Marker
        position={position}
        icon={{
          url: isOpenInfoWindow || defaultOpenInfoWindow ? MapCard : House2,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
        onMouseOver={(e) => {
          setIsOpenInfoWindow(true);
        }}
      />
      {isOpenInfoWindow || defaultOpenInfoWindow
        ? showInfoWindow(position)
        : null}
      ,
    </div>
  );
}

export default MapMarker;
