import {useEffect, useRef, useState} from 'react';
import {useSlidesCount} from './useSlidesCount';
import {CARD_WIDTH} from '../helpers/constants';

export const useSlider = () => {
  const sliderRef = useRef(null);
  const [gap, setGap] = useState(10);
  const slideInView = useSlidesCount();

  useEffect(() => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const gapsCount = slideInView !== 1 ? slideInView - 1 : 1;
      const currentGap =
        (containerWidth - CARD_WIDTH * slideInView) / gapsCount;

      setGap(currentGap);
    }
  }, []);

  return {gap, sliderRef, slideInView};
};
