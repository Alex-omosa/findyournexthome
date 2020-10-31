import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import homes from "./../../data/data";
import Spinner from "./Spinner";
import MapStyles from "./MapStyles";
import MapMarker from "./marker/MapMarker";
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  mapTypeId: "roadmap",
};
const center = {
  lat: homes[0].lat,
  lng: homes[0].lng,
};

function SearchMap() {
  const [isOpenByDefault, setIsOpenByDefault] = React.useState(true);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const mapRef = React.useRef();
  const onMapLaod = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error Loading map";
  if (!isLoaded) return <Spinner />;

  //

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onLoad={onMapLaod}
      >
        {homes.map((marker, i) => (
          <MapMarker
            key={i}
            openInfo={i}
            position={{ lat: marker.lat, lng: marker.lng }}
            defaultOpenInfoWindow={i === 0 || i === 1 ? isOpenByDefault : null}
            setIsOpenByDefault={setIsOpenByDefault}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default SearchMap;
