import { useState, useEffect } from 'react';

const Route = ({ path, children }) => {
  const [currentLoaction, setCurrentLocation] = useState(
    window.location.pathname
  );
  
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentLocation(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, [currentLoaction]);
  return currentLoaction === path ? children : null;
};

export default Route;
