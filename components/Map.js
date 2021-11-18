import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Image from "next/image";

import locationMarker from "../assets/images/location-marker.png";

import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const coords = {
    long: 4.86648,
    lat: 52.365921,
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: coords.lat,
    longitude: coords.long,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState(false);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/jalla/ckvwg1anm0rnl14n0z9h8mcwf"
      mapboxApiAccessToken={process.env.mapbox_token}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        longitude={coords.long}
        latitude={coords.lat}
        onClick={() => setSelectedLocation(true)}
      >
        <Image src={locationMarker} width="36px" height="36px" />
      </Marker>
      {selectedLocation ? (
        <Popup
          closeOnClick={true}
          onClose={() => setSelectedLocation(false)}
          latitude={coords.lat}
          longitude={coords.long}
        >
          <div className="rounded-full bg-white">
            <div>
              <p className="font-semibold">BUGG.</p>
              <p>Kinkerstraat 208-2, Amsterdam</p>
            </div>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

export default Map;
