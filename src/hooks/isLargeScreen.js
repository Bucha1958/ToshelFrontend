// hooks/useIsLargeScreen.js
import { useEffect, useState } from "react";

export default function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };

    checkScreen(); // run at load
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isLargeScreen;
}
