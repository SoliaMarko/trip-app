import './TripItem.css';
import React, { useContext } from 'react';
import { TripContext } from '../../../App';

const TripItem = React.forwardRef(
  ({ id, city, startDate, endDate, selected = false }, ref) => {
    const { onSelectTrip } = useContext(TripContext);

    const switchTrip = () => {
      onSelectTrip(id);
    };

    return (
      <li className="trip-item" onClick={switchTrip} ref={ref}>
        <img
          className="trip-image"
          src={require(`../../../assets/citiesImages/${city
            .split(' ')
            .join('')}.webp`)}
          alt={`${city}-illustration`}
        />
        <div className={`${selected ? 'selected' : ''} trip-info`}>
          <h4 className="trip-city">{city}</h4>
          <p className="trip-dates">
            {startDate} - {endDate}
          </p>
        </div>
      </li>
    );
  }
);

export default TripItem;
