import React, { useContext } from 'react';
import { ModalContext } from '../../../App';

const AddTripButton = () => {
  const { onOpenModal } = useContext(ModalContext);

  return (
    <li>
      <button className="add-trip-button" onClick={onOpenModal}>
        <div>➕</div>
        <p>Add trip</p>
      </button>
    </li>
  );
};

export default AddTripButton;
