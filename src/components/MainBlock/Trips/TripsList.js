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
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faChevronLeft, faChevronRight, faSortUp, faSortDown);

// get root font size per 1%
const rootElement = document.getElementById('root');
const styles = window.getComputedStyle(rootElement);
const rootFontSize = parseFloat(styles.getPropertyValue('font-size'));

const TripsList = () => {
  const { trips, onSelectTrip, onSortTrips } = useContext(TripContext);
  const { onOpenModal } = useContext(ModalContext);

  const [currentItem, setCurrentItem] = useState(0);

  const imgWidthInPx = useRef();
  const scrollerRef = useRef();

  const imgWidthInRem = imgWidthInPx.current / rootFontSize;

  // itemWidth equal: trip-item width + gap (6rem)
  const itemWidth = (imgWidthInRem + 6) * rootFontSize;
  const totalItems = trips.length;

  useEffect(() => {
    imgWidthInPx.current = getImgWidth();
  }, []);

  const getImgWidth = () => {
    const img = document.querySelector('.trip-image');

    return window.getComputedStyle(img).getPropertyValue('width');
  };

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
    if (currentItem > 0) {
      setCurrentItem(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentItem < totalItems) {
      setCurrentItem(prev => prev + 1);
    }
  };

  useEffect(() => {
    scrollToItem(currentItem);
  }, [currentItem, scrollToItem]);

  return (
    <div className="trips-list-container">
      <button className="sort-up-btn" onClick={e => onSortTrips(e, 'asc')}>
        <FontAwesomeIcon icon="fa-sort-up" />
      </button>
      <button className="sort-down-btn" onClick={e => onSortTrips(e, 'desc')}>
        <FontAwesomeIcon icon="fa-sort-down" />
      </button>

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
