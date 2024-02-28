import React, { useContext } from 'react';
import TripItem from './TripItem';
import AddTripButton from './AddTripButton';
import { ModalContext, TripContext } from '../../../App';

const TripsList = () => {
  const { trips, onSelectTrip } = useContext(TripContext);
  const { onOpenModal } = useContext(ModalContext);

  return (
    <ul className="trips-list">
      {trips.map(trip => (
        <TripItem
          key={trip.id}
          id={trip.id}
          city={trip.city}
          startDate={trip.startDate}
          endDate={trip.endDate}
          selected={trip.selected}
          onSelectTrip={onSelectTrip}
        />
      ))}

      <AddTripButton onOpenModal={onOpenModal} />
    </ul>
  );
};

export default TripsList;
