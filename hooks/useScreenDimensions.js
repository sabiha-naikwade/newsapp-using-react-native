import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get('screen'),
  );

  useEffect(() => {
    const onChange = result => {
      setScreenDimensions(result.screen);
    };
    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
