"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import L from "leaflet";

// Fix Leaflet marker icons in Next.js
const markerIcon = L.icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const heritageLocations = [
  {
    name: "Nalanda Mahavihara",
    category: "Historical Place",
    location: "Nalanda, Bihar",
    position: [25.1357, 85.4436] as [number, number],
  },
  {
    name: "Madhubani",
    category: "Folk Art",
    location: "Madhubani, Bihar",
    position: [26.3489, 86.0716] as [number, number],
  },
  {
    name: "Deoghar",
    category: "Tradition",
    location: "Deoghar, Jharkhand",
    position: [24.4921, 86.6995] as [number, number],
  },
  {
    name: "Ranchi",
    category: "Culture",
    location: "Ranchi, Jharkhand",
    position: [23.3441, 85.3096] as [number, number],
  },
];

export default function HeritageMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#ddd3c8] shadow-sm">
      <MapContainer
        center={[24.5, 85.5]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-[500px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {heritageLocations.map((place) => (
          <Marker
            key={place.name}
            position={place.position}
            icon={markerIcon}
          >
            <Popup>
              <div className="min-w-[180px]">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {place.category}
                </p>

                <h3 className="mt-1 text-base font-bold">
                  {place.name}
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  {place.location}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}