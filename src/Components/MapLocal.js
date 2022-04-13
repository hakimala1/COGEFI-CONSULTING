import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export default function MapLocal() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBzm6P9eJGMhBN1EPbhKpEYvkmMBz3-9rw",
      });
    
      if (!isLoaded) return <div>Loading...</div>;
      return <Map />;
}
function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }

