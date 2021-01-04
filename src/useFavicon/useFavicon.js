import { useEffect, useState } from "react";

export const useFavicon = (initialFaviconURL) => {
  const [favicon, setFavicon] = useState(initialFaviconURL);
  const updateFavicon = () => {
    const link = document.querySelector("link[rel~='icon']");
    link.href = favicon;
  };
  useEffect(updateFavicon, [favicon]);
  return setFavicon;
};
