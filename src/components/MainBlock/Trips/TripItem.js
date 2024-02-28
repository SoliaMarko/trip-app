import React, { useContext } from 'react';
import { TripContext } from '../../../App';

const TripItem = ({ id, city, startDate, endDate, selected = false }) => {
  const { onSelectTrip } = useContext(TripContext);

  const switchTrip = () => {
    onSelectTrip(id);
  };

  return (
    <li>
      <div className="trip-item" onClick={switchTrip}>
        <img
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
      </div>
    </li>
  );
};

export default TripItem;
