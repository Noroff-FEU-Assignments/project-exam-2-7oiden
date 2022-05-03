import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function StreetMap({latitude, longitude}) {
    const containerStyle = {
      maxWidth: "400px",
      height: "267px",
      borderRadius: "25px",
    };

    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    
    const center = {
        lat: lat,
        lng: lng,
    }

    //  console.log(center);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDeBgWNvAla1OxecdgJaF7pBiqBoIPu9I4">
      <GoogleMap
        className="details-card__map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        loading="lazy"
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default StreetMap;


