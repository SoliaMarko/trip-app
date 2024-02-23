import React, { useState } from 'react';
import TripItem from './TripItem';
import AddTripButton from './AddTripButton';

const TripsList = ({ trips, onSelectTrip, onOpenModal }) => {
  return (
    <ul className="trips-list">
      {trips.map(trip => (
        <TripItem
          key={trip.id}
          id={trip.id}
          city={trip.city}
          startDate={trip.startDate}
          endDate={trip.endDate}
          onSelectTrip={onSelectTrip}
        ></TripItem>
      ))}

      <AddTripButton onOpenModal={onOpenModal}></AddTripButton>
    </ul>
  );
};

export default TripsList;
