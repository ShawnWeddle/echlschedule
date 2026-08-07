import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const ECHLmarker: React.FC = () => {
  const markerRef = useRef(null);

  useEffect(() => {
    new maplibregl.Marker().setLngLat([-87.377, 39.453]);

    return () => {};
  }, []);

  return (
    <div
      ref={markerRef}
      className="h-8 w-8 rounded-full border-2 border-white bg-red-500"
    >
      X
    </div>
  );
};
