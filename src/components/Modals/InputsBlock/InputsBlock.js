import { useContext, useState } from 'react';
import DateInput from './DateInput';
import DropdownMenu from './DropdownMenu';
import { ModalContext, TripContext } from '../../../App';

function InputsBlock() {
  const { citiesList } = useContext(TripContext);
  const { onInputCity, onInputStartDate, onInputEndDate } =
    useContext(ModalContext);

  return (
    <div className="modal-inputs">
      <DropdownMenu citiesList={citiesList} onInputCity={onInputCity}>
        City
      </DropdownMenu>
      <DateInput onInputDate={onInputStartDate}>Start date</DateInput>
      <DateInput onInputDate={onInputEndDate}>End date</DateInput>
    </div>
  );
}

export default InputsBlock;
