import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

export default function Map({ pos }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(pos, 13, { animate: false }), [map, pos];
  }, [pos]);
  return (
    <Marker position={pos}>
      <Popup></Popup>
    </Marker>
  );
}
