import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaMapMarkerAlt } from "react-icons/fa";

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
    zoom: 12.99,
  });

  const [selectedLocation, setSelectedLocation] = useState(false);

  return (
    <ReactMapGL
      className="w-full h-full rounded-2xl shadow-md"
      // mapStyle="mapbox://styles/jalla/ckvwg1anm0rnl14n0z9h8mcwf"
      mapStyle="mapbox://styles/jalla/ckwnnidrx79i614p33on83a16"
      mapboxApiAccessToken={process.env.mapbox_token}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        longitude={coords.long}
        latitude={coords.lat}
        onClick={() => setSelectedLocation(true)}
      >
        <FaMapMarkerAlt className="w-7 h-7 text-yellow cursor-pointer" />
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
