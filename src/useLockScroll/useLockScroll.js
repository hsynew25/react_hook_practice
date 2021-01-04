import { useEffect, useState } from "react";

export const useLockScroll = () => {
  const [isLocked, setIsLocked] = useState(false);

  const lockScroll = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => window.scroll(x, y);
    setIsLocked(true);
  };

  const unlockScroll = () => {
    window.onscroll = () => {};
    setIsLocked(false);
  };

  useEffect(unlockScroll, lockScroll, []);

  return [isLocked, { lockScroll, unlockScroll }];
};
