import { useEffect, useState } from "react";

export const useOnline = () => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
  }, []);
  return status;
};
