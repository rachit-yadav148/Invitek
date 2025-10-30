import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component automatically scrolls the window to the top
// whenever the user navigates to a new page.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array: runs this effect every time the pathname changes

  return null; // This component doesn't render any HTML
}

