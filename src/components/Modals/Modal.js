import './Modal.css';
import { useState } from 'react';
import InputsBlock from './InputsBlock/InputsBlock';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

function Modal({ trips, toggleModal }) {
  // ***** INPUTS STATES *****

  const [inputCity, setInputCity] = useState('');
  const [inputStartDate, setInputStartDate] = useState('');
  const [inputEndDate, setInputEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleInputCity(city) {
    setInputCity(city);
  }

  function handleInputStartDate(date) {
    setInputStartDate(date);
  }

  function handleInputEndDate(date) {
    setInputEndDate(date);
  }

  function handleAddNewTrip(e) {
    e.preventDefault();

    if (!inputCity || !inputStartDate || !inputEndDate) {
      setErrorMessage(() => 'please fill in all required fields');
      return;
    }

    if (new Date(inputStartDate).getTime() > new Date(inputEndDate).getTime()) {
      setErrorMessage(() => 'the start date cannot be later than the end date');
      return;
    }

    if (trips.find(trip => trip.id === inputCity + inputStartDate)) {
      setErrorMessage(
        () => 'you already have scheduled travel for this date at this location'
      );
      return;
    }

    trips.push({
      id: `${inputCity}${inputStartDate}`,
      city: inputCity,
      startDate: inputStartDate,
      endDate: inputEndDate,
      selected: false,
    });

    toggleModal();

    // Reset Inputs
    handleInputCity('');
    handleInputStartDate('');
    handleInputEndDate('');
  }

  return (
    <>
      <form className="modal">
        <ModalHeader errorMessage={errorMessage} />
        <hr />
        <InputsBlock
          onInputCity={handleInputCity}
          onInputStartDate={handleInputStartDate}
          onInputEndDate={handleInputEndDate}
        />
        <hr />
        <ModalFooter onSaveNewTrip={handleAddNewTrip} />
      </form>
    </>
  );
}

export default Modal;
