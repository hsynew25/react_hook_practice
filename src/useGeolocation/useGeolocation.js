import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [coords, setCoords] = useState({
    lat: null,
    lon: null,
  });
  const [error, setError] = useState(null);

  const success = (pos) => {
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
    });
  };

  const fail = () => {
    setError("Unable to retrieve your location");
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, fail);
    }
  }, []);

  return { coords, error };
};
