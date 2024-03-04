import './TripsList.css';
import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import TripItem from './TripItem';
import AddTripButton from './AddTripButton';
import { ModalContext, TripContext } from '../../../App';

import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faChevronLeft, faChevronRight);

// get root font size per 1%
const rootElement = document.getElementById('root');
const styles = window.getComputedStyle(rootElement);
const rootFontSize = parseFloat(styles.getPropertyValue('font-size'));

const TripsList = () => {
  let imgWidthInPx = useRef();

  useEffect(() => {
    imgWidthInPx.current = getImgWidth();
  }, []);

  const getImgWidth = () => {
    const img = document.querySelector('.trip-image');

    return window.getComputedStyle(img).getPropertyValue('width');
  };

  const imgWidthInRem = imgWidthInPx.current / rootFontSize;

  const { trips, onSelectTrip } = useContext(TripContext);
  const { onOpenModal } = useContext(ModalContext);

  const [currentItem, setCurrentItem] = useState(0);

  // Equal: trip-item width + gap (6rem)
  const itemWidth = (imgWidthInRem + 6) * rootFontSize;
  const totalItems = trips.length;

  const scrollerRef = useRef();

  const scrollToItem = useCallback(
    item => {
      scrollerRef.current.scrollTo({
        left: item * itemWidth,
        behavior: 'smooth',
      });
    },
    [itemWidth]
  );

  const handlePrevious = () => {
    console.log('prev work');
    if (currentItem > 0) {
      console.log('current less than 0');
      setCurrentItem(prev => prev - 1);
    }
  };

  const handleNext = () => {
    console.log('next work');
    if (currentItem < totalItems - 1) {
      console.log('next less than total');
      setCurrentItem(prev => prev + 1);
    }
  };

  useEffect(() => {
    scrollToItem(currentItem);
  }, [currentItem, scrollToItem]);

  return (
    <div className="trips-list-container">
      <button className="prev-btn" onClick={handlePrevious}>
        <FontAwesomeIcon icon="fa-chevron-left" />
      </button>

      <div className="trips-list-wrapper">
        <ul className="trips-list" ref={scrollerRef}>
          {trips.map(trip => (
            <TripItem
              key={trip.id}
              id={trip.id}
              city={trip.city}
              startDate={trip.startDate}
              endDate={trip.endDate}
              selected={trip.selected}
              onSelectTrip={onSelectTrip}
              ref={el => {
                if (el) {
                  imgWidthInPx.current = el.getBoundingClientRect().width;
                }
              }}
            />
          ))}
          <AddTripButton onOpenModal={onOpenModal} />
        </ul>
      </div>
      <button className="next-btn" onClick={handleNext}>
        <FontAwesomeIcon icon="fa-chevron-right" />
      </button>
    </div>
  );
};

export default TripsList;
