import { useRef, useEffect } from "react";
import { styles } from "utils";

import "./autohuntMap.scss";

export const AutohuntMap = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const center = { lat: 25.77887, lng: -80.18973 };
  const zoom = 13;
  useEffect(() => {
    try {
      if (mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom,
          styles,
        });
        new window.google.maps.Marker({ position: center, map: map });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="autohunt_map">
      <h2>Location</h2>
      <div ref={mapRef} className="map"></div>
    </div>
  );
};
