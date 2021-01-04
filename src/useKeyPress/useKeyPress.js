import { useEffect, useState } from "react";

export const useKeyPress = (key) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === key) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };

    document.addEventListener("keypress", handleKeyPress);
  }, []);

  return status;
};
