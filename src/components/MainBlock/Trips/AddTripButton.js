import React, { useState } from 'react';

const AddTripButton = ({ onOpenModal }) => {
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
