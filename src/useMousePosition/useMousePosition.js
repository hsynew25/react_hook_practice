import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleChange = (e) => {
    setX(e.screenX);
    setY(e.screenY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleChange);
  }, []);

  return { x, y };
};
