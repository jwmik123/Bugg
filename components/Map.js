import { useState } from "react";
import { getCenter } from "geolib";
import ReactMapGL, { Marker } from "react-map-gl";

import { LocationMarkerIcon } from "@heroicons/react/outline";

function Map() {
  const coords = {
    long: 4.87,
    lat: 52.37,
  };

  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 14,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/jalla/ckvwg1anm0rnl14n0z9h8mcwf"
      mapboxApiAccessToken="pk.eyJ1IjoiamFsbGEiLCJhIjoiY2t0a2c1YTcwMWFtZjJxbzZqc3VvaGZhNiJ9.-x-5vY8REo7IrMeUzus26Q"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker longitude={coords.long} latitude={coords.lat}>
        <LocationMarkerIcon className="w-10 h-10 text-yellow" />
      </Marker>
    </ReactMapGL>
  );
}

export default Map;
