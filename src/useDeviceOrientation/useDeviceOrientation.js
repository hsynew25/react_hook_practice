import { useEffect, useRef, useState } from "react";

export const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState(null);
  const [beta, setBeta] = useState(null);
  const [gamma, setGamma] = useState(null);

  const handleChange = (e) => {
    setAlpha(e.alpha);
    setBeta(e.beta);
    setGamma(e.gamma);
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleChange);
    return () => window.removeEventListener("deviceorientation", handleChange);
  }, []);

  return { alpha, beta, gamma };
};
