import './AddTripButton.css';
import './TripItem.css';
import React, { useContext } from 'react';
import { ModalContext } from '../../../App';

const AddTripButton = () => {
  const { onOpenModal } = useContext(ModalContext);

  return (
    <li className="trip-item">
      <button className="add-trip-button" onClick={onOpenModal}>
        <span>➕</span>
        <p>Add trip</p>
      </button>
    </li>
  );
};

export default AddTripButton;
