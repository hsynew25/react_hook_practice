import { useEffect, useState } from "react";

export const useLocalStorage = (name, initialValue) => {
  const [curretLS, setLS] = useState(initialValue);
  const updateLS = () => {
    localStorage.setItem(name, curretLS);
  };
  useEffect(updateLS, [curretLS]);
  return [curretLS, setLS];
};
