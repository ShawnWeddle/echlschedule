import { useState, useEffect, useRef } from "react";
import { echlTeamsList } from "../data/teams";
import { ECHLteamData } from "../data/teamInfo";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const ECHLmap: React.FC = () => {
  const mapContainer = useRef(null);
  const markerRef = useRef(null);
  const [viewState, setViewState] = useState<{
    center: maplibregl.LngLatLike;
    zoom: number;
  }>({
    center: [-100, 35],
    zoom: 4,
  });

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current ?? "",
      style:
        "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      ...viewState,
    });

    echlTeamsList.forEach((team) => {
      const { coordinates } = ECHLteamData[team];

      const marker = document.createElement("div");
      marker.style.backgroundImage = `url("src/assets/${team}_S.png")`;
      marker.style.backgroundSize = "contain";
      marker.style.backgroundRepeat = "no-repeat";
      marker.style.width = "50px";
      marker.style.height = "50px";

      new maplibregl.Marker({ element: marker })
        .setLngLat([coordinates.longitude, coordinates.latitude])
        .addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [viewState]);

  return (
    <div ref={mapContainer} className="absolute min-h-screen w-full"></div>
  );
};
