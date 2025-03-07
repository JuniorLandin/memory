"use client";
import ModalComponents from "@/components/ModalComponents";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = "pk.eyJ1IjoianVuaW9ybGFuZGluIiwiYSI6ImNtNmpjM3YyZTAxNGkybG9vbG40cXhuZmcifQ.PXOvuW8RMIaTU8tbLyo2uA";

type Location = {
  name: string;
  coords: [number, number];
};

const locations: Location[] = [
  { name: "Santa Catarina", coords: [-48.64533, -26.77368] },
  { name: "Caldas Novas", coords: [-48.626747, -17.742876] },
  { name: "Porto Seguro", coords: [-39.063408, -16.449532] },
  { name: "Gonçalves - MG", coords: [-45.854607, -22.659445] },
  { name: "Uberlândia", coords: [-48.279297, -18.920391] },
  { name: "Campos do Jordão - SP", coords: [-45.5923, -22.7390] },
  { name: "Sumaré - SP", coords: [-47.2662, -22.8204] }
];

export default function MapBox() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [cityName, setCityName] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (mapRef.current || !mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-48.4933474473, -18.5922915144],
      zoom: 6
    });

    locations.forEach((location) => {
      const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(location.coords)
        .setPopup(
          new mapboxgl.Popup().setHTML(`<span style="color: black; font-weight: bold;">${location.name}</span>`)
        )
        .addTo(map);

      marker.getElement().addEventListener("click", () => {
        setShowModal(true)
        setCityName(location.name)
      });
    });

    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div ref={mapContainerRef} style={{ width: "100%", height: "500px" }} />;
      {showModal && <ModalComponents closeModal={closeModal} cityName={cityName} />}
    </div>
  )
}
