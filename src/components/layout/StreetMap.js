import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "200px",
  height: "200px",
};

const center = {
  lat: 53.339688,
  lng: -6.236688,
};

function StreetMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCx_GIww0-PXBYV-hoJZazRioCLgWMSXFA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(StreetMap);
