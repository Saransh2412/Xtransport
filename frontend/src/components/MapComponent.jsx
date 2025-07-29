import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's missing icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const markers = [
  { city: "Edmonton", position: [53.5461, -113.4938] },
  { city: "Calgary", position: [51.0447, -114.0719] },
  { city: "Winnipeg", position: [49.8951, -97.1384] },
  { city: "Regina", position: [50.4452, -104.6189] },
  { city: "Prince George, BC", position: [53.9171, -122.7497] },
  { city: "Surrey, BC", position: [49.1913, -122.8490] },
  { city: "Toronto", position: [43.65107, -79.347015] },
  { city: "Montreal", position: [45.5017, -73.5673] },
];

const MapComponent = () => {
  return (
    <MapContainer
      center={[53.5461, -113.4938]}
      zoom={4}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.position}>
          <Tooltip direction="top" offset={[0, -10]} permanent>
            {marker.city}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
