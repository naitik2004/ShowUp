"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default leaflet icons
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-full bg-slate-900 animate-pulse" />;

  return (
    <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 grayscale-[0.5] invert-[0.9] hue-rotate-[200deg]">
      <MapContainer
        center={[28.6139, 77.2090]} // Default to Delhi area
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[28.6139, 77.2090]} icon={icon}>
          <Popup>
            ShowUp Game here!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
