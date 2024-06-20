"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";



interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 10,
}

const Map = ({ zoom = defaults.zoom, posix }: MapProps) => {

    const markers = [
        {
            posix: [-21.0023, 55.2798] as LatLngTuple,
            popup: "Saint-Paul"
        },
        {
            posix: [-21.0542, 55.2255] as LatLngTuple,
            popup: "Saint-Gilles"
        },
        {
            posix: [-21.1735, 55.2928] as LatLngTuple,
            popup: "Saint-Leu"
        },
        {
            posix: [-21.2681, 55.3646] as LatLngTuple,
            popup: "L'étang Salé"
        },
        {
            posix: [-21.2891, 55.4164] as LatLngTuple,
            popup: "Saint-Louis",
        },
        {
            posix: [-21.3540, 55.4782] as LatLngTuple,
            popup: "Saint-Pierre"
        },
        {
            posix: [-21.3824, 55.6190] as LatLngTuple,
            popup: "Saint-Joseph"
        },
        {
            posix: [-21.2820, 55.5249] as LatLngTuple,
            popup: "Le Tampon"
        },
    ];

    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, idx) => (
                <Marker key={idx} position={marker.posix} draggable={false}>
                    <Popup>On se déplace à {marker.popup}</Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default Map;
