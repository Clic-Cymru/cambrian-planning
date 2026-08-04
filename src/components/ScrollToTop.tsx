import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Skip tracking on initial mount because index.html script handles the first PageView
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Send PageView event on client-side navigation
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
