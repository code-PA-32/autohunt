import "./googleMap.scss";
import { Location } from "types";
import { styles } from "utils";
import { useRef, useEffect } from "react";

interface GoogleMapProps extends Location {
  googleMaps: any;
}

export const GoogleMap = ({ city, state, coords }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const center = coords;
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
    <div className="car_map">
      <h3>
        Location: {state}, {city}
      </h3>
      <div ref={mapRef} className="map"></div>
    </div>
  );
};
